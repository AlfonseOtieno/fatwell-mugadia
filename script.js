document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      mobileNav.classList.toggle('open', !open);
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { burger.setAttribute('aria-expanded', 'false'); mobileNav.classList.remove('open'); }
    });
  }

  // Scroll reveal — content visible by default, animation is enhancement only
  const items = document.querySelectorAll('.reveal');
  if (items.length && 'IntersectionObserver' in window) {
    items.forEach(el => el.classList.add('pre'));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach(el => io.observe(el));
  }
});
