export default function SectionHead({ index, label, title, sub }) {
  return (
    <div className="section-head">
      <p className="mono eyebrow">
        <span>{index}</span> {label}
      </p>
      <h2>{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
