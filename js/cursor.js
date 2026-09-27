const dot = document.querySelector('#cursor-glow');
if (matchMedia('(pointer:fine)').matches) {
  addEventListener('pointermove', e => { dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; });
  document.querySelectorAll('.button,.tilt-card,summary').forEach(el => { el.addEventListener('mouseenter', () => dot.classList.add('active')); el.addEventListener('mouseleave', () => dot.classList.remove('active')); });
}
document.querySelectorAll('.tilt-card').forEach(card => card.addEventListener('pointermove', e => { const r = card.getBoundingClientRect(); card.style.transform = `perspective(700px) rotateX(${(e.clientY-r.top-r.height/2)/-18}deg) rotateY(${(e.clientX-r.left-r.width/2)/18}deg)`; }));
document.querySelectorAll('.tilt-card').forEach(card => card.addEventListener('pointerleave', () => { card.style.transform = ''; }));
