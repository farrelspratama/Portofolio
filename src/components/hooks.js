import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Efek mengetik bergantian untuk daftar teks. */
export function useTyping(words, { type = 75, erase = 38, hold = 1600 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : "");
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let w = 0, i = 0, deleting = false, timer;
    const tick = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let delay = deleting ? erase : type;
      if (!deleting && i === word.length) { deleting = true; delay = hold; }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);
  return text;
}

/** Menambahkan kelas "in" saat elemen masuk viewport. */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("in"); io.disconnect(); }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Menandai section yang sedang terlihat untuk navigasi. */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);
  return active;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch { /* abaikan */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
