import { useEffect, useRef, useState } from "react";
import { projectGroups } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

const img = (name) => `/img/projects/${name}.webp`;
const vid = (name) => `/video/${name}.mp4`;
const isVideo = (s) => Boolean(s.video || s.youtube);
const keyOf = (s) => s.src || s.video || s.youtube;
// gambar kecil untuk thumbnail: poster untuk video, atau src untuk gambar
const thumbOf = (s) =>
  s.poster ? img(s.poster) : s.src ? img(s.src) : s.youtube ? `https://i.ytimg.com/vi/${s.youtube}/hqdefault.jpg` : null;

// Menerima { label, href } (disarankan), tapi juga { name/title, url/link }.
// URL tanpa "https://" otomatis diberi awalan supaya tidak jadi link relatif.
const toLink = (l, i) => {
  const raw = typeof l === "string" ? l : l.href || l.url || l.link || "";
  const href = String(raw).trim();
  if (!href) return null;
  return {
    href: /^(https?:|mailto:|\/)/i.test(href) ? href : "https://" + href,
    label: (typeof l === "object" && (l.label || l.name || l.title)) || "Lihat proyek",
    key: i,
  };
};

function Media({ s, active, inView }) {
  // video autoplay hanya diputar saat bagian proyek terlihat di layar
  const live = active && (!s.autoplay || inView);
  if (s.youtube) {
    return live ? (
      <iframe
        className="on"
        src={`https://www.youtube-nocookie.com/embed/${s.youtube}?rel=0${s.autoplay ? "&autoplay=1&mute=1&loop=1&playlist=" + s.youtube : ""}`}
        title={s.alt}
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    ) : null;
  }
  if (s.video) {
    return live ? (
      <video
        className="on"
        controls
        playsInline
        loop={Boolean(s.autoplay)}
        autoPlay={Boolean(s.autoplay)}
        preload={s.autoplay ? "auto" : "metadata"}
        poster={s.poster ? img(s.poster) : undefined}
        aria-label={s.alt}
        ref={(el) => {
          if (el && s.autoplay) {
            el.muted = true; // browser hanya mengizinkan autoplay jika tanpa suara
            el.play().catch(() => {});
          }
        }}
      >
        <source src={vid(s.video)} type="video/mp4" />
      </video>
    ) : null;
  }
  return (
    <img src={img(s.src)} alt={active ? s.alt : ""} aria-hidden={!active} className={active ? "on" : ""} loading="lazy" />
  );
}

function BrowserFrame({ project, current, portrait, inView }) {
  const shot = project.images[current];
  return (
    <div className={"frame" + (portrait ? " portrait" : "")}>
      <div className="frame-bar" aria-hidden="true">
        <i /><i /><i />
        <span className="mono">{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} / {shot.label.toLowerCase()}</span>
      </div>
      <div className="frame-screen" style={{ background: shot.bg }}>
        {project.images.map((s, i) => (
          <Media key={keyOf(s)} s={s} active={i === current} inView={inView} />
        ))}
      </div>
    </div>
  );
}

function Thumbs({ project, current, onPick }) {
  const { t: tr } = useLang();
  return (
    <div className="thumbs" role="group" aria-label={tr.projects.mediaAria + project.title}>
      {project.images.map((s, i) => {
        const t = thumbOf(s);
        return (
          <button key={keyOf(s)} type="button" className={i === current ? "on" : ""} aria-pressed={i === current} onClick={() => onPick(i)}>
            {t ? (
              <img src={t} alt="" loading="lazy" />
            ) : s.video ? (
              <video className="thumb-vid" src={vid(s.video) + "#t=0.5"} muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
            ) : (
              <span className="thumb-blank" aria-hidden="true" />
            )}
            {isVideo(s) && <span className="play" aria-hidden="true">▶</span>}
            <span className="mono">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PhoneFrame({ project, current, onPick }) {
  const { t } = useLang();
  return (
    <div className="phones">
      {project.images.map((s, i) => (
        <button
          key={s.src}
          type="button"
          className={"phone" + (i === current ? " on" : "")}
          onClick={() => onPick(i)}
          aria-label={t.projects.show + s.label}
        >
          <img src={img(s.src)} alt={s.alt} loading="lazy" />
        </button>
      ))}
    </div>
  );
}

function Project({ project, index }) {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const mediaRef = useRef(null);
  const ref = useReveal();
  const links = (project.links || []).map(toLink).filter(Boolean);
  useEffect(() => {
    const el = mediaRef.current;
    if (!el || !("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
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
        {links.length > 0 && (
          <div className="project-links">
            {links.map((l) => (
              <a key={l.key} className="btn btn-dark" href={l.href} target="_blank" rel="noreferrer">
                {l.label} <Icon name="external" size={16} />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="project-media" ref={mediaRef}>
        {project.kind === "phone" && !project.images.some(isVideo) ? (
          <PhoneFrame project={project} current={current} onPick={setCurrent} />
        ) : (
          <>
            <BrowserFrame project={project} current={current} portrait={project.kind === "phone"} inView={inView} />
            <Thumbs project={project} current={current} onPick={setCurrent} />
          </>
        )}
      </div>
    </article>
  );
}

function GroupTabs({ groups, active, onPick }) {
  const { t } = useLang();
  return (
    <div className="ptabs" role="tablist" aria-label={t.projects.tabsAria}>
      {groups.map((g) => (
        <button
          key={g.id}
          type="button"
          role="tab"
          id={"ptab-" + g.id}
          aria-selected={active === g.id}
          aria-controls="proyek-list"
          className={active === g.id ? "on" : ""}
          onClick={() => onPick(g.id)}
        >
          {g.label} <span className="mono">{g.count}</span>
        </button>
      ))}
    </div>
  );
}

export default function Projects() {
  const { t, data } = useLang();
  const projects = data.projects;
  const [group, setGroup] = useState("all");
  // hanya tampilkan tab untuk kategori yang punya proyek
  const groups = projectGroups
    .map((g) => ({ ...g, count: projects.filter((p) => p.group === g.id).length }))
    .filter((g) => g.count > 0);
  const tabs = [{ id: "all", label: t.projects.all, count: projects.length }, ...groups];
  const visible = group === "all" ? projects : projects.filter((p) => p.group === group);
  return (
    <section id="proyek" className="section">
      <div className="container">
        <SectionHead
          index="03"
          label={t.nav.projects}
          title={t.projects.title}
          sub={t.projects.sub}
        />
        {groups.length > 1 && <GroupTabs groups={tabs} active={group} onPick={setGroup} />}
        <div className="projects" id="proyek-list" role="tabpanel" aria-labelledby={"ptab-" + group}>
          {visible.map((p, i) => (
            <Project key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
