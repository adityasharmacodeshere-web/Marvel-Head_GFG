import './three-scene.js';
import './cursor.js';
import './registration.js';

const target = new Date(2026, 8, 28, 9, 0, 0);
const end = new Date(2026, 8, 28, 15, 0, 0);
const countdown = document.querySelector('#countdown');
const state = document.querySelector('#event-state');
function tick() {
  const now = new Date();
  const remaining = target - now;
  if (remaining > 0) {
    const total = Math.floor(remaining / 1000);
    countdown.textContent = [Math.floor(total / 3600), Math.floor(total / 60) % 60, total % 60].map(n => String(n).padStart(2, '0')).join(':');
    state.textContent = '28 September 2026 · 09:00 local';
  } else if (now < end) {
    countdown.textContent = 'LIVE NOW';
    state.textContent = 'The heist is in progress · ends 15:00 local';
  } else {
    countdown.textContent = 'MISSION COMPLETE';
    state.textContent = 'The 28 September 2026 heist has ended';
  }
}
tick(); setInterval(tick, 1000);
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const el = document.querySelector(a.getAttribute('href')); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); } }));
