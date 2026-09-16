/* =========================================================
   BOJAGI HOUSE — 인터랙션
   1) 스크롤 등장 애니메이션
   2) 한국어 / 영어 전환 (data-ko, data-en 속성 기반)
   ========================================================= */

(function () {
  'use strict';

  /* ---------- 1. 스크롤 등장 ---------- */
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- 2. 언어 전환 ---------- */
  var STORAGE_KEY = 'bojagi-house-lang';
  var buttons = document.querySelectorAll('.lang-switch button');
  var translatable = document.querySelectorAll('[data-ko][data-en]');

  var titles = {
    ko: 'BOJAGI HOUSE | 한국 전통 공예를 잇는 현대 생활 소품',
    en: 'BOJAGI HOUSE | Korean Craft, Modern Living'
  };

  /* 줄바꿈(\n)이 들어간 문구는 <br>로 바꿔 넣는다. innerHTML을 쓰지 않아 안전하다. */
  function setText(el, text) {
    var lines = String(text).split('\n');
    var fragment = document.createDocumentFragment();

    lines.forEach(function (line, index) {
      if (index > 0) {
        fragment.appendChild(document.createElement('br'));
      }
      fragment.appendChild(document.createTextNode(line));
    });

    el.textContent = '';
    el.appendChild(fragment);
  }

  function applyLang(lang) {
    var key = lang === 'en' ? 'data-en' : 'data-ko';

    translatable.forEach(function (el) {
      var value = el.getAttribute(key);
      if (value !== null) {
        setText(el, value);
      }
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
    document.title = titles[lang] || titles.ko;

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

  /* 저장된 설정 → 없으면 브라우저 언어로 첫 화면을 정한다. */
  var initial = null;

  try {
    initial = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    initial = null;
  }

  if (initial !== 'ko' && initial !== 'en') {
    initial = (navigator.language || 'ko').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en';
  }

  applyLang(initial);
})();
