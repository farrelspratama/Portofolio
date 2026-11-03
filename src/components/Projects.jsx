import { useState } from "react";
import { projects } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

const img = (name) => `/img/projects/${name}.webp`;

function BrowserFrame({ project, current }) {
  const shot = project.images[current];
  return (
    <div className="frame">
      <div className="frame-bar" aria-hidden="true">
        <i /><i /><i />
        <span className="mono">{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} / {shot.label.toLowerCase()}</span>
      </div>
      <div className="frame-screen" style={{ background: shot.bg }}>
        {project.images.map((s, i) => (
          <img
            key={s.src}
            src={img(s.src)}
            alt={i === current ? s.alt : ""}
            aria-hidden={i !== current}
            className={i === current ? "on" : ""}
            loading="lazy"
          />
        ))}
      </div>
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
        {project.kind === "phone" ? (
          <PhoneFrame project={project} current={current} onPick={setCurrent} />
        ) : (
          <>
            <BrowserFrame project={project} current={current} />
            <div className="thumbs" role="group" aria-label={"Screenshot " + project.title}>
              {project.images.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  className={i === current ? "on" : ""}
                  aria-pressed={i === current}
                  onClick={() => setCurrent(i)}
                >
                  <img src={img(s.src)} alt="" loading="lazy" />
                  <span className="mono">{s.label}</span>
                </button>
              ))}
            </div>
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
