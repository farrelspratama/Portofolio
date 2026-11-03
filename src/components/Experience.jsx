import { experience } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="pengalaman" className="section section-alt">
      <div className="container">
        <SectionHead index="04" label="Pengalaman" title="Work Experience" />
        <article ref={ref} className="xp reveal">
          <div className="xp-text">
            <p className="mono xp-place">{experience.place}</p>
            <h3>{experience.title}</h3>
            <ul className="xp-acts">
              {experience.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p>{experience.description}</p>
          </div>
          <div className="xp-photos">
            {experience.photos.map((p, i) => (
              <img
                key={p.src}
                className={"xp-photo p" + (i + 1)}
                src={`/img/photos/${p.src}.webp`}
                alt={p.alt}
                loading="lazy"
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
