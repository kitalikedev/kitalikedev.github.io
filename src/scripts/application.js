import '../css/style.css';
import initScrollReveal from './scroll-reveal';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initClipboard();
  initMobileNav();
  initScrollSpy();
  initBackToTop();
});

/**
 * Click-to-copy email functionality
 */
function initClipboard() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('apple-toast');
  const toastText = document.getElementById('apple-toast-text');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'contact@kitalikedev.io';
      const label = btn.querySelector('.copy-label');

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        // Button label feedback
        if (label) {
          const originalText = label.textContent;
          label.textContent = 'Copied';
          btn.classList.add('bg-white/15', 'text-white');

          setTimeout(() => {
            label.textContent = originalText;
            btn.classList.remove('bg-white/15', 'text-white');
          }, 2000);
        }

        // Apple Toast notification
        if (toast) {
          if (toastText) {
            toastText.textContent = `${email} copied`;
          }
          toast.classList.remove('hidden');
          toast.classList.add('apple-toast-in', 'flex');

          setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('apple-toast-in', 'flex');
          }, 2600);
        }
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !menu) return;

  function toggleMenu() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
  }

  toggle.addEventListener('click', toggleMenu);

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * ScrollSpy for Floating Dock
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.dock-nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 220;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('text-[#f5f5f7]');
          link.classList.add('text-[#86868b]');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.remove('text-[#86868b]');
            link.classList.add('text-[#f5f5f7]');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * Minimal back-to-top handler
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
