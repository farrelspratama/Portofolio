import { technology, hardSkills, softSkills, interests } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";

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
  return (
    <section id="skill" className="section section-alt">
      <div className="container">
        <SectionHead
          index="02"
          label="Skill"
          title="Alat & kemampuan"
          sub="Teknologi yang saya pakai sehari-hari, dan hal-hal yang ingin terus saya dalami."
        />
        <div className="bento">
          <div ref={ref} className="card reveal bento-tech">
            <h3>Technology</h3>
            <ul className="logo-grid">
              {technology.map((t) => (
                <li key={t.name}>
                  <span className="logo-tile">
                    <img src={`/img/logos/${t.logo}.webp`} alt="" loading="lazy" />
                  </span>
                  <span className="logo-name">{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <List title="Hard Skills" items={hardSkills} tone="hard" />
          <List title="Soft Skills" items={softSkills} tone="soft" />
          <List title="Interest" items={interests} tone="interest" />
        </div>
      </div>
    </section>
  );
}
