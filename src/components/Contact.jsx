import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, emailjs as cfg } from "../data.js";
import { useLang } from "../i18n.jsx";
import { useReveal } from "./hooks.js";
import SectionHead from "./SectionHead.jsx";
import Icon from "./Icon.jsx";

export default function Contact() {
  const form = useRef(null);
  const ref = useReveal();
  const { t } = useLang();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(cfg.serviceId, cfg.templateId, form.current, { publicKey: cfg.publicKey });
      form.current.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="kontak" className="section contact">
      <div className="container">
        <SectionHead
          index="05"
          label={t.nav.contact}
          title={t.contact.title}
          sub={t.contact.sub}
        />
        <div ref={ref} className="contact-grid reveal">
          <div className="contact-links">
            <a href={"mailto:" + profile.email}><Icon name="mail" /> {profile.email}</a>
            <a href={profile.phoneHref}><Icon name="phone" /> {profile.phone}</a>
            <a href={profile.github.href} target="_blank" rel="noreferrer"><Icon name="github" /> {profile.github.label}</a>
            <a href={profile.linkedin.href} target="_blank" rel="noreferrer"><Icon name="linkedin" /> {profile.linkedin.label}</a>
            <a href={profile.instagram.href} target="_blank" rel="noreferrer"><Icon name="instagram" /> {profile.instagram.label}</a>
          </div>

          <form ref={form} onSubmit={onSubmit} className="form">
            <label>
              <span>{t.contact.name}</span>
              <input type="text" name="from_name" placeholder={t.contact.namePh} required autoComplete="name" />
            </label>
            <label>
              <span>{t.contact.email}</span>
              <input type="email" name="from_email" placeholder={t.contact.emailPh} required autoComplete="email" />
            </label>
            <label>
              <span>{t.contact.message}</span>
              <textarea name="message" rows="5" placeholder={t.contact.messagePh} required />
            </label>
            <button type="submit" className="btn btn-dark" disabled={status === "sending"}>
              {status === "sending" ? t.contact.sending : t.contact.send} <Icon name="send" size={18} />
            </button>
            <p className={"form-status " + status} role="status" aria-live="polite">
              {status === "sent" && t.contact.sent}
              {status === "error" && t.contact.error}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
