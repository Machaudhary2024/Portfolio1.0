/* ===== TYPED TEXT ===== */
const phrases = [
  'generative AI systems',
  'full-stack web apps',
  'mobile products',
  'clean, scalable code',
  'real-world impact'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');
const typeSpeed = 80;
const deleteSpeed = 40;
const pauseEnd = 2000;
const pauseStart = 500;

function typeEffect() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && charIndex === current.length) {
    delay = pauseEnd;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = pauseStart;
  }

  setTimeout(typeEffect, delay);
}
typeEffect();

/* ===== HEADER SCROLL ===== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ===== MOBILE NAV ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ===== COUNTER ANIMATION ===== */
const statNums = document.querySelectorAll('.stat__num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav__links a:not(.nav__cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navItems.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--primary)' : '';
  });
}, { passive: true });

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');
const btnText = submitBtn.querySelector('.btn__text');
const btnLoader = submitBtn.querySelector('.btn__loader');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const formAction = contactForm.action;
  if (formAction.includes('YOUR_FORM_ID')) {
    formStatus.textContent = '⚠️ Replace the Formspree placeholder URL in index.html with your real form link.';
    formStatus.className = 'form-status error';
    return;
  }

  btnText.hidden = true;
  btnLoader.hidden = false;
  submitBtn.disabled = true;

  try {
    const response = await fetch(formAction, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } else {
      const data = await response.json();
      throw new Error(data.error || 'Something went wrong.');
    }
  } catch (err) {
    formStatus.textContent = `❌ ${err.message || 'Failed to send. Please email me directly.'}`;
    formStatus.className = 'form-status error';
  } finally {
    btnText.hidden = false;
    btnLoader.hidden = true;
    submitBtn.disabled = false;
  }
});

/* ===== SMOOTH SCROLL POLYFILL FOR OLDER BROWSERS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
