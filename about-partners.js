(() => {
  const root = document.querySelector('[data-about-partners-carousel]');
  if (!root) return;

  const slides = [...root.querySelectorAll('[data-partner-slide]')];
  const dots = [...root.querySelectorAll('[data-partner-dot]')];
  const previous = root.querySelector('[data-partner-prev]');
  const next = root.querySelector('[data-partner-next]');
  let current = 0;
  let timer;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = undefined;
  };

  const start = () => {
    stop();
    if (!document.hidden) timer = window.setInterval(() => showSlide(current + 1), 5000);
  };

  previous?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget)) start();
  });
  document.addEventListener('visibilitychange', start);

  showSlide(0);
  start();
})();
