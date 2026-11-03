import { profile } from "../data.js";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

const contacts = [
  { icon: "mail", label: profile.email, href: "mailto:" + profile.email },
  { icon: "phone", label: profile.phone, href: profile.phoneHref },
  { icon: "linkedin", label: profile.linkedin.label, href: profile.linkedin.href },
  { icon: "github", label: profile.github.label, href: profile.github.href },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="tentang" className="section">
      <div className="container">
        <SectionHead index="01" label="Tentang" title="Haloo! Saya Farrel." />
        <div ref={ref} className="about reveal">
          <div className="about-text">
            <p>{profile.about}</p>
            <p className="edu mono">
              <span>Pendidikan</span> {profile.education}
            </p>
          </div>
          <ul className="about-contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span className="chip-icon"><Icon name={c.icon} size={18} /></span>
                  <span>{c.label}</span>
                </a>
              </li>
            ))}
            <li>
              <span className="plain">
                <span className="chip-icon"><Icon name="pin" size={18} /></span>
                <span>{profile.location}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
