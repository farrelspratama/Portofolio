import { useState } from "react";
import Icon from "./Icon.jsx";
import { useScrollSpy } from "./hooks.js";

const links = [
  { id: "tentang", label: "Tentang" },
  { id: "skill", label: "Skill" },
  { id: "proyek", label: "Proyek" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "kontak", label: "Kontak" },
];
const ids = ["beranda", ...links.map((l) => l.id)];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#beranda" onClick={() => setOpen(false)} aria-label="Ke beranda">
          <span className="brand-mark">F</span>
          <span className="brand-text">Farrel<span>.</span></span>
        </a>
        <nav className={"nav-links" + (open ? " open" : "")} aria-label="Navigasi utama">
          {links.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={active === l.id ? "active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
