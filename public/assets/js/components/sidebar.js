// components/sidebar.js — mobile toggle + scroll-spy for the in-page sidebar
import { qs, qsa } from '../lib/dom.js';

export function initSidebar() {
  const side = qs('.sidebar');
  if (!side) return;

  // mobile open/close (menu button is rendered by the navbar component)
  const menu = qs('#menuBtn');
  if (menu) menu.addEventListener('click', () => side.classList.toggle('sidebar--open'));
  side.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') side.classList.remove('sidebar--open');
  });

  // scroll-spy: highlight the link of the section currently in view
  const links = qsa('.sidebar a[href^="#"]', side);
  if (!links.length) return;

  const byId = {};
  links.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    (byId[id] = byId[id] || []).push(a);
  });
  const targets = Object.keys(byId)
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.remove('is-active'));
        (byId[e.target.id] || []).forEach((a) => a.classList.add('is-active'));
      });
    },
    { rootMargin: '-65px 0px -75% 0px', threshold: 0 }
  );
  targets.forEach((t) => spy.observe(t));
}
