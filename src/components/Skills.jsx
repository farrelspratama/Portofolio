import { technology, hardSkills, softSkills, interests } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import { useLang } from "../i18n.jsx";

function List({ title, items, tone }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={"card reveal bento-" + tone}>
      <h3>{title}</h3>
      <ul className="tag-list">
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();
  const { t } = useLang();
  return (
    <section id="skill" className="section section-alt">
      <div className="container">
        <SectionHead
          index="02"
          label={t.nav.skills}
          title={t.skills.title}
          sub={t.skills.sub}
        />
        <div className="bento">
          <div ref={ref} className="card reveal bento-tech">
            <h3>{t.skills.technology}</h3>
            <ul className="logo-grid">
              {technology.map((tech) => (
                <li key={tech.name}>
                  <span className="logo-tile">
                    <img src={`/img/logos/${tech.logo}.webp`} alt="" loading="lazy" />
                  </span>
                  <span className="logo-name">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <List title={t.skills.hard} items={hardSkills} tone="hard" />
          <List title={t.skills.soft} items={softSkills} tone="soft" />
          <List title={t.skills.interest} items={interests} tone="interest" />
        </div>
      </div>
    </section>
  );
}
