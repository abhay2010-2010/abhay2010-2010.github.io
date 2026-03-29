/* ============================================================
   Portfolio JS — Abhay Kawle  |  Clean, fully working
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. Typed.js ───────────────────────────────────────── */
  if (typeof Typed !== 'undefined') {
    new Typed('.typing', {
      strings: ['Full Stack Developer', 'MERN Stack Developer', 'DSA Enthusiast', 'Problem Solver'],
      typeSpeed: 70, backSpeed: 45, loop: true
    });
    new Typed('.typing-2', {
      strings: ['Full Stack Developer', 'MERN Stack Developer', 'Lifelong Learner'],
      typeSpeed: 70, backSpeed: 45, loop: true
    });
  }

  /* ── 2. Owl Carousel ───────────────────────────────────── */
  if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
    $('.owl-carousel').owlCarousel({
      loop: true, margin: 20, nav: false, dots: true,
      autoplay: true, autoplayTimeout: 4000, autoplayHoverPause: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 2 } }
    });
  }

  /* ── 3. Cached DOM refs ────────────────────────────────── */
  var nav        = document.getElementById('nav-menu');
  var scrollBtn  = document.querySelector('.scroll-up-btn');
  var menuWrap   = document.querySelector('.menu-btn');
  var menuIcon   = document.querySelector('.menu-btn i');
  var menu       = document.querySelector('#nav-menu .menu');
  var menuOpen   = false;

  /* ── 4. Scroll — sticky nav + scroll-up + active link ─── */
  window.addEventListener('scroll', function () {
    var y = window.scrollY;

    /* sticky nav */
    nav.classList.toggle('sticky', y > 20);

    /* scroll-up button */
    scrollBtn.classList.toggle('show', y > 500);

    /* active nav link */
    var current = '';
    document.querySelectorAll('section[id]').forEach(function (s) {
      if (y >= s.offsetTop - 130) current = s.id;
    });
    document.querySelectorAll('#nav-menu .menu a').forEach(function (a) {
      a.classList.toggle('active-link', a.getAttribute('href') === '#' + current);
    });
  });

  /* ── 5. Scroll-up button ───────────────────────────────── */
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── 6. Hamburger menu ─────────────────────────────────── */
  menuWrap.addEventListener('click', function () {
    menuOpen = !menuOpen;
    menu.classList.toggle('active', menuOpen);
    menuIcon.className = menuOpen ? 'fas fa-times' : 'fas fa-bars';
  });

  /* Close on any link click */
  document.querySelectorAll('#nav-menu .menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuOpen = false;
      menu.classList.remove('active');
      menuIcon.className = 'fas fa-bars';
    });
  });

  /* ── 7. Experience Timeline — IntersectionObserver ─────── */
  var items = document.querySelectorAll('.timeline-item');
  if (items.length) {
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      items.forEach(function (el) { obs.observe(el); });
    } else {
      /* Fallback: show all immediately on old browsers */
      items.forEach(function (el) { el.classList.add('visible'); });
    }
  }

});