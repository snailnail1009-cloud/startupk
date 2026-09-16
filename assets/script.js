/* =========================================================
   BOJAGI HOUSE — 인터랙션
   1) 한국어 / 영어 전환 (data-ko, data-en / 이미지 대체텍스트 포함)
   2) 스크롤 등장 애니메이션
   3) 헤더 배경 전환
   4) 포트폴리오 확대 보기(라이트박스)
   ========================================================= */

(function () {
  'use strict';

  /* ---------- 1. 언어 전환 ---------- */
  var STORAGE_KEY = 'bojagi-house-lang';
  var buttons = document.querySelectorAll('.lang-switch button');
  var translatable = document.querySelectorAll('[data-ko][data-en]');
  var images = document.querySelectorAll('[data-alt-ko][data-alt-en]');
  var lang = 'ko';

  var titles = {
    ko: 'BOJAGI HOUSE | 한국의 유산을 잇는 현대적 생활 브랜드',
    en: 'BOJAGI HOUSE | Korean Heritage, Modern Minimal'
  };

  /* 줄바꿈(\n)은 <br>로 바꿔 넣는다. innerHTML을 쓰지 않아 안전하다. */
  function setText(el, text) {
    var fragment = document.createDocumentFragment();

    String(text).split('\n').forEach(function (line, index) {
      if (index > 0) {
        fragment.appendChild(document.createElement('br'));
      }
      fragment.appendChild(document.createTextNode(line));
    });

    el.textContent = '';
    el.appendChild(fragment);
  }

  function applyLang(next) {
    lang = next === 'en' ? 'en' : 'ko';

    var key = 'data-' + lang;
    translatable.forEach(function (el) {
      var value = el.getAttribute(key);
      if (value !== null) {
        setText(el, value);
      }
    });

    images.forEach(function (img) {
      var value = img.getAttribute('data-alt-' + lang);
      if (value !== null) {
        img.setAttribute('alt', value);
      }
    });

    document.documentElement.lang = lang;
    document.title = titles[lang];

    buttons.forEach(function (button) {
      var active = button.getAttribute('data-lang') === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* 프라이빗 모드 등 저장이 막힌 환경은 그냥 넘어간다. */
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      applyLang(button.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    saved = null;
  }

  if (saved !== 'ko' && saved !== 'en') {
    saved = (navigator.language || 'ko').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en';
  }

  applyLang(saved);

  /* ---------- 2. 스크롤 등장 ---------- */
  var revealTargets = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- 3. 헤더 배경 ---------- */
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');

  function updateHeader() {
    var limit = hero ? hero.offsetHeight - 80 : 80;
    header.classList.toggle('is-solid', window.scrollY > limit);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);

  /* ---------- 4. 라이트박스 ---------- */
  var lightbox = document.querySelector('.lightbox');
  var lightboxImage = lightbox.querySelector('img');
  var lightboxCaption = lightbox.querySelector('figcaption');
  var closeButton = lightbox.querySelector('.lightbox-close');
  var lastFocused = null;

  function openLightbox(button) {
    var name = button.querySelector('.work-name');
    lastFocused = button;
    lightboxImage.src = button.getAttribute('data-full');
    lightboxImage.alt = name ? name.textContent : '';
    lightboxCaption.textContent = name ? name.textContent : '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = '';
    document.body.style.overflow = '';
    if (lastFocused) {
      lastFocused.focus();
    }
  }

  document.querySelectorAll('.work').forEach(function (button) {
    button.addEventListener('click', function () {
      openLightbox(button);
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
})();
