import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as idData from "./data.js";
import * as enData from "./data.en.js";

/* ---------- Teks antarmuka ---------- */
const ui = {
  id: {
    meta: {
      title: "Farrel Setia Pratama — Data Analyst & Web Developer",
      description:
        "Portofolio Farrel Setia Pratama, mahasiswa Pendidikan Ilmu Komputer dengan minat di data analisis, machine learning, dan pengembangan web.",
    },
    skip: "Lewati ke konten",
    nav: { about: "Tentang", skills: "Skill", projects: "Proyek", experience: "Pengalaman", contact: "Kontak" },
    navAria: "Navigasi utama",
    homeAria: "Ke beranda",
    themeToLight: "Beralih ke mode terang",
    themeToDark: "Beralih ke mode gelap",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    langAria: "Bahasa",
    hero: {
      rolePrefix: "Peran: ",
      viewProjects: "Lihat proyek",
      contactMe: "Hubungi saya",
      photoAlt: "Foto Farrel Setia Pratama",
    },
    about: { title: "Haloo! Saya Farrel.", education: "Pendidikan" },
    skills: {
      title: "Alat & kemampuan",
      sub: "Teknologi yang saya pakai sehari-hari, dan hal-hal yang ingin terus saya dalami.",
      technology: "Technology",
      hard: "Hard Skills",
      soft: "Soft Skills",
      interest: "Interest",
    },
    projects: {
      title: "Project Experience",
      sub: "Dari analisis data sampai aplikasi web dan game edukasi.",
      all: "Semua",
      tabsAria: "Kategori proyek",
      mediaAria: "Media ",
      show: "Tampilkan: ",
    },
    experience: { title: "Work Experience" },
    contact: {
      title: "Mari berbincang.",
      sub: "Punya proyek, kesempatan magang, atau sekadar ingin menyapa? Kirim pesan, saya senang membalasnya.",
      name: "Nama",
      namePh: "Nama Anda",
      email: "Email",
      emailPh: "nama@email.com",
      message: "Pesan",
      messagePh: "Tulis pesan Anda…",
      send: "Kirim pesan",
      sending: "Mengirim…",
      sent: "Terima kasih! Pesan Anda sudah terkirim.",
      error: "Pesan belum terkirim. Coba lagi atau hubungi lewat email di samping.",
    },
    footer: "Dibuat dengan React · Bandung, ID",
  },
  en: {
    meta: {
      title: "Farrel Setia Pratama — Data Analyst & Web Developer",
      description:
        "Portfolio of Farrel Setia Pratama, a Computer Science Education student interested in data analysis, machine learning, and web development.",
    },
    skip: "Skip to content",
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
    navAria: "Main navigation",
    homeAria: "Go to home",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langAria: "Language",
    hero: {
      rolePrefix: "Roles: ",
      viewProjects: "View projects",
      contactMe: "Contact me",
      photoAlt: "Photo of Farrel Setia Pratama",
    },
    about: { title: "Hello! I'm Farrel.", education: "Education" },
    skills: {
      title: "Tools & skills",
      sub: "The technologies I use every day, and the areas I want to keep going deeper into.",
      technology: "Technology",
      hard: "Hard Skills",
      soft: "Soft Skills",
      interest: "Interests",
    },
    projects: {
      title: "Project Experience",
      sub: "From data analysis to web apps and educational games.",
      all: "All",
      tabsAria: "Project categories",
      mediaAria: "Media ",
      show: "Show: ",
    },
    experience: { title: "Work Experience" },
    contact: {
      title: "Let's talk.",
      sub: "Have a project, an internship opportunity, or just want to say hi? Send a message, I'd love to reply.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "name@email.com",
      message: "Message",
      messagePh: "Write your message…",
      send: "Send message",
      sending: "Sending…",
      sent: "Thank you! Your message has been sent.",
      error: "Your message could not be sent. Please try again or reach me by email beside this form.",
    },
    footer: "Built with React · Bandung, ID",
  },
};

/* ---------- Data per bahasa ---------- */
// Indonesia = src/data.js, English = src/data.en.js (struktur keduanya sama persis).
function buildData(lang) {
  const d = lang === "en" ? enData : idData;
  return { profile: d.profile, projects: d.projects, experience: d.experience };
}

/* ---------- Provider & hook ---------- */
const KEY = "lang";
const Ctx = createContext(null);

function detect() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "id" || saved === "en") return saved;
  } catch {}
  const nav = (typeof navigator !== "undefined" && navigator.language) || "id";
  return nav.toLowerCase().startsWith("id") ? "id" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detect);
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  };
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", ui[lang].meta.description);
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: ui[lang], data: buildData(lang) }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
