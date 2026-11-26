import { useLang } from "../i18n.jsx";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";

function Item({ item }) {
  const ref = useReveal();
  const photos = item.photos || [];
  const grid = photos.length > 2; // 3 foto atau lebih -> tampil sebagai galeri grid
  return (
    <article ref={ref} className={"xp reveal" + (photos.length ? "" : " xp-solo")}>
      <div className="xp-text">
        <p className="mono xp-place">
          {item.place}
          {item.period ? " · " + item.period : ""}
        </p>
        <h3>{item.title}</h3>
        {item.activities?.length > 0 && (
          <ul className="xp-acts">
            {item.activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        <p>{item.description}</p>
      </div>
      {photos.length > 0 && (
        <div className={"xp-photos" + (grid ? " xp-grid" : "")}>
          {photos.map((p, i) => (
            <img
              key={p.src}
              className={grid ? "xp-photo" : "xp-photo p" + (i + 1)}
              src={`/img/photos/${p.src}.webp`}
              alt={p.alt}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </article>
  );
}

export default function Experience() {
  const { t, data } = useLang();
  const experience = data.experience;
  return (
    <section id="pengalaman" className="section section-alt">
      <div className="container">
        <SectionHead index="04" label={t.nav.experience} title={t.experience.title} />
        <div className="xp-list">
          {experience.map((item) => (
            <Item key={item.title + item.place} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
