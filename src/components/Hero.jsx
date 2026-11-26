import { technology } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useTyping } from "./hooks.js";
import Icon from "./Icon.jsx";

export default function Hero() {
  const { t, data } = useLang();
  const profile = data.profile;
  const typed = useTyping(profile.roles);
  const ticker = [...technology, ...technology];
  return (
    <section id="beranda" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="mono hero-meta">
            <span className="dot" /> Est. 2025 · {profile.location.split(",")[0]}
          </p>
          <h1 className="hero-name">
            <span>Farrel Setia</span>
            <span>Pratama<i>.</i></span>
          </h1>
          <p className="cell mono" aria-label={t.hero.rolePrefix + profile.roles.join(", ")}>
            <span className="cell-in">In [1]:</span>
            <span className="cell-code">
              <b>role</b> = "<span className="typed">{typed}</span><span className="caret" />"
            </span>
          </p>
          <p className="hero-lead">{profile.lead}</p>
          <div className="hero-cta">
            <a className="btn btn-dark" href="#proyek">
              {t.hero.viewProjects} <Icon name="arrowDown" size={18} />
            </a>
            <a className="btn btn-line" href="#kontak">
              {t.hero.contactMe} <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <div className="photo-card">
            <img src="/img/photos/farrel.webp" alt={t.hero.photoAlt} width="1100" height="1467" fetchPriority="high" />
          </div>
          <figcaption className="photo-tag mono">
            <Icon name="pin" size={14} /> {profile.location}
          </figcaption>
        </figure>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {ticker.map((tech, i) => (
            <span key={i}>
              <img src={`/img/logos/${tech.logo}.webp`} alt="" height="22" loading="lazy" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
