import { useTheme } from "./components/hooks.js";
import { useLang } from "./i18n.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const { t } = useLang();
  return (
    <>
      <a className="skip" href="#tentang">{t.skip}</a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Farrel Setia Pratama</span>
          <span className="mono">{t.footer}</span>
        </div>
      </footer>
    </>
  );
}
