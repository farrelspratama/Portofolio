import { useEffect } from "react";
import { prefersReducedMotion } from "./hooks.js";

export function jumpTo(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduce = prefersReducedMotion();
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", "#" + id);

  let cancelled = false;
  const stop = () => { cancelled = true; };
  const events = ["wheel", "touchstart", "keydown", "mousedown"];
  events.forEach((e) => window.addEventListener(e, stop, { once: true, passive: true }));
  const done = () => events.forEach((e) => window.removeEventListener(e, stop));

  const expected = () =>
    (parseFloat(getComputedStyle(el).scrollMarginTop) || 0) +
    (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
  const atEdge = (err) =>
    (err < 0 && window.scrollY <= 0) ||
    (err > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1);

  const fix = (tries) => {
    if (cancelled) return done();
    const err = el.getBoundingClientRect().top - expected();
    if (Math.abs(err) <= 3 || atEdge(err) || tries === 0) return done();
    window.scrollBy({ top: err, behavior: reduce ? "auto" : "smooth" });
    setTimeout(() => fix(tries - 1), 700);
  };
  setTimeout(() => fix(3), 900);
  return true;
}

export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a || a.target === "_blank") return;
      const id = decodeURIComponent(a.getAttribute("href").slice(1));
      if (id && jumpTo(id)) e.preventDefault();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}