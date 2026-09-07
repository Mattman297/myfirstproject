// Aruba Wakeboard School — small progressive enhancements.

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Gallery: when a real photo exists for a tile, drop the "photo here" placeholder look.
document.querySelectorAll('.shot').forEach((tile, i) => {
  const probe = new Image();
  probe.onload = () => tile.classList.add('has-photo');
  probe.src = `images/ride-${i + 1}.jpg`;
});

// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

function closeMenu() {
  header.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close the menu on a tap anywhere outside it, on Escape, or after picking a link
document.addEventListener('click', (e) => {
  if (header.classList.contains('open') && !e.target.closest('.nav-drawer')) {
    closeMenu();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
header.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Hide the header while scrolling down, bring it back on scroll up.
// Always visible at the very top of the page.
let lastY = window.scrollY;
let scrollQueued = false;

function updateHeader() {
  const y = Math.max(window.scrollY, 0);
  const dy = y - lastY;
  if (Math.abs(dy) > 4) closeMenu();
  if (y <= 8) {
    header.classList.remove('hide');       // always show at the very top
  } else if (dy > 4) {
    header.classList.add('hide');          // scrolling down — tuck it away
  } else if (dy < -4) {
    header.classList.remove('hide');       // scrolling up — bring it back
  }
  lastY = y;
  scrollQueued = false;
}

window.addEventListener('scroll', () => {
  if (!scrollQueued) {
    window.requestAnimationFrame(updateHeader);
    scrollQueued = true;
  }
}, { passive: true });

// Signup form — front-end validation only (no backend wired up)
const form = document.querySelector('.signup');
const msg = document.querySelector('.form-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!valid) {
    msg.textContent = 'Please enter a valid email address.';
    msg.style.color = '#ffe08a';
    form.email.focus();
    return;
  }

  msg.textContent = `Thanks! We'll get back to ${email} to sort out a time.`;
  msg.style.color = '#ffffff';
  form.reset();
});

// Subtle reveal-on-scroll for feature cards
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.feature, .steps li, .plan').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}
