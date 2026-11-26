import { profile as baseProfile } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

const contacts = [
  { icon: "mail", label: baseProfile.email, href: "mailto:" + baseProfile.email },
  { icon: "phone", label: baseProfile.phone, href: baseProfile.phoneHref },
  { icon: "linkedin", label: baseProfile.linkedin.label, href: baseProfile.linkedin.href },
  { icon: "github", label: baseProfile.github.label, href: baseProfile.github.href },
];

export default function About() {
  const ref = useReveal();
  const { t, data } = useLang();
  const profile = data.profile;
  return (
    <section id="tentang" className="section">
      <div className="container">
        <SectionHead index="01" label={t.nav.about} title={t.about.title} />
        <div ref={ref} className="about reveal">
          <div className="about-text">
            <p>{profile.about}</p>
            <p className="edu mono">
              <span>{t.about.education}</span> {profile.education}
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
