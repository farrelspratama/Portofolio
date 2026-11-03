import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, emailjs as cfg } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

export default function Contact() {
  const form = useRef(null);
  const ref = useReveal();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(cfg.serviceId, cfg.templateId, form.current, { publicKey: cfg.publicKey });
      form.current.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="kontak" className="section contact">
      <div className="container">
        <SectionHead
          index="05"
          label="Kontak"
          title="Mari berbincang."
          sub="Punya proyek, kesempatan magang, atau sekadar ingin menyapa? Kirim pesan, saya senang membalasnya."
        />
        <div ref={ref} className="contact-grid reveal">
          <div className="contact-links">
            <a href={"mailto:" + profile.email}><Icon name="mail" /> {profile.email}</a>
            <a href={profile.phoneHref}><Icon name="phone" /> {profile.phone}</a>
            <a href={profile.github.href} target="_blank" rel="noreferrer"><Icon name="github" /> {profile.github.label}</a>
            <a href={profile.linkedin.href} target="_blank" rel="noreferrer"><Icon name="linkedin" /> {profile.linkedin.label}</a>
            <a href={profile.instagram.href} target="_blank" rel="noreferrer"><Icon name="instagram" /> {profile.instagram.label}</a>
          </div>

          <form ref={form} onSubmit={onSubmit} className="form">
            <label>
              <span>Nama</span>
              <input type="text" name="from_name" placeholder="Nama Anda" required autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="from_email" placeholder="nama@email.com" required autoComplete="email" />
            </label>
            <label>
              <span>Pesan</span>
              <textarea name="message" rows="5" placeholder="Tulis pesan Anda…" required />
            </label>
            <button type="submit" className="btn btn-dark" disabled={status === "sending"}>
              {status === "sending" ? "Mengirim…" : "Kirim pesan"} <Icon name="send" size={18} />
            </button>
            <p className={"form-status " + status} role="status" aria-live="polite">
              {status === "sent" && "Terima kasih! Pesan Anda sudah terkirim."}
              {status === "error" && "Pesan belum terkirim. Coba lagi atau hubungi lewat email di samping."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
