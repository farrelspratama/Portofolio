import { useState } from "react";
import Icon from "./Icon.jsx";
import { useScrollSpy } from "./hooks.js";
import { useLang } from "../i18n.jsx";

const links = [
  { id: "tentang", key: "about" },
  { id: "skill", key: "skills" },
  { id: "proyek", key: "projects" },
  { id: "pengalaman", key: "experience" },
  { id: "kontak", key: "contact" },
];
const ids = ["beranda", ...links.map((l) => l.id)];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  const { lang, setLang, t } = useLang();
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#beranda" onClick={() => setOpen(false)} aria-label={t.homeAria}>
          <span className="brand-mark">F</span>
          <span className="brand-text">Farrel<span>.</span></span>
        </a>
        <nav className={"nav-links" + (open ? " open" : "")} aria-label={t.navAria}>
          {links.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={active === l.id ? "active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={t.langAria}>
            {["id", "en"].map((l) => (
              <button
                key={l}
                type="button"
                className={lang === l ? "on" : ""}
                aria-pressed={lang === l}
                lang={l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? t.themeToLight : t.themeToDark}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
