import { useState } from "react";
import { projects } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

const img = (name) => `/img/projects/${name}.webp`;
const vid = (name) => `/video/${name}.mkv`;
const isVideo = (s) => Boolean(s.video || s.youtube);
const keyOf = (s) => s.src || s.video || s.youtube;
// gambar kecil untuk thumbnail: poster untuk video, atau src untuk gambar
const thumbOf = (s) => (s.poster ? img(s.poster) : s.src ? img(s.src) : null);

function Media({ s, active }) {
  if (s.youtube) {
    return active ? (
      <iframe
        className="on"
        src={`https://www.youtube-nocookie.com/embed/${s.youtube}?rel=0`}
        title={s.alt}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    ) : null;
  }
  if (s.video) {
    return active ? (
      <video className="on" controls playsInline preload="metadata" poster={s.poster ? img(s.poster) : undefined} aria-label={s.alt}>
        <source src={vid(s.video)} type="video/mp4" />
      </video>
    ) : null;
  }
  return (
    <img src={img(s.src)} alt={active ? s.alt : ""} aria-hidden={!active} className={active ? "on" : ""} loading="lazy" />
  );
}

function BrowserFrame({ project, current, portrait }) {
  const shot = project.images[current];
  return (
    <div className={"frame" + (portrait ? " portrait" : "")}>
      <div className="frame-bar" aria-hidden="true">
        <i /><i /><i />
        <span className="mono">{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} / {shot.label.toLowerCase()}</span>
      </div>
      <div className="frame-screen" style={{ background: shot.bg }}>
        {project.images.map((s, i) => (
          <Media key={keyOf(s)} s={s} active={i === current} />
        ))}
      </div>
    </div>
  );
}

function Thumbs({ project, current, onPick }) {
  return (
    <div className="thumbs" role="group" aria-label={"Media " + project.title}>
      {project.images.map((s, i) => {
        const t = thumbOf(s);
        return (
          <button key={keyOf(s)} type="button" className={i === current ? "on" : ""} aria-pressed={i === current} onClick={() => onPick(i)}>
            {t ? <img src={t} alt="" loading="lazy" /> : <span className="thumb-blank" aria-hidden="true" />}
            {isVideo(s) && <span className="play" aria-hidden="true">▶</span>}
            <span className="mono">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PhoneFrame({ project, current, onPick }) {
  return (
    <div className="phones">
      {project.images.map((s, i) => (
        <button
          key={s.src}
          type="button"
          className={"phone" + (i === current ? " on" : "")}
          onClick={() => onPick(i)}
          aria-label={"Tampilkan: " + s.label}
        >
          <img src={img(s.src)} alt={s.alt} loading="lazy" />
        </button>
      ))}
    </div>
  );
}

function Project({ project, index }) {
  const [current, setCurrent] = useState(0);
  const ref = useReveal();
  return (
    <article ref={ref} className={"project reveal" + (index % 2 ? " flip" : "")}>
      <div className="project-text">
        <p className="mono eyebrow">
          <span>{String(index + 1).padStart(2, "0")}</span> {project.category}
        </p>
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <ul className="chips">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((l) => (
              <a key={l.href} className="btn btn-dark" href={l.href} target="_blank" rel="noreferrer">
                {l.label} <Icon name="external" size={16} />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="project-media">
        {project.kind === "phone" && !project.images.some(isVideo) ? (
          <PhoneFrame project={project} current={current} onPick={setCurrent} />
        ) : (
          <>
            <BrowserFrame project={project} current={current} portrait={project.kind === "phone"} />
            <Thumbs project={project} current={current} onPick={setCurrent} />
          </>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyek" className="section">
      <div className="container">
        <SectionHead
          index="03"
          label="Proyek"
          title="Project Experience"
          sub="Dari analisis data sampai aplikasi web dan mobile."
        />
        <div className="projects">
          {projects.map((p, i) => (
            <Project key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
