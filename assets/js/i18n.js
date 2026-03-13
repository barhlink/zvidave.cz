/**
 * i18n.js – Zvídavě.cz language switching logic
 *
 * Usage: include this script on any page.
 * It detects the current language from the URL path (/cs/, /en/, /uk/, /fr/)
 * and switches the language when the user picks a different one.
 */

(function () {
  'use strict';

  var SUPPORTED = ['cs', 'en', 'uk', 'fr'];

  /** Return the language code from the current URL path, e.g. 'cs' */
  function currentLang() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    return parts.length > 0 && SUPPORTED.indexOf(parts[0]) !== -1
      ? parts[0]
      : 'cs';
  }

  /**
   * Build the equivalent URL for a target language.
   * Replaces the leading /lang/ segment, keeps the rest.
   */
  function switchLang(targetLang) {
    var path = window.location.pathname;
    var lang = currentLang();
    var newPath = path.replace(new RegExp('^/' + lang + '(/|$)'), '/' + targetLang + '$1');
    window.location.href = newPath;
  }

  /**
   * Load a locale JSON file and return a promise resolving to the data.
   */
  function loadLocale(lang) {
    return fetch('/locales/' + lang + '.json')
      .then(function (res) { return res.json(); });
  }

  /**
   * Replace elements with data-i18n attributes using the loaded locale.
   * Example: <span data-i18n="nav.home"></span>
   */
  function applyTranslations(locale) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = key.split('.').reduce(function (obj, k) {
        return obj && obj[k];
      }, locale);
      if (value !== undefined) {
        el.textContent = value;
      }
    });
  }

  // Public API
  window.i18n = {
    currentLang: currentLang,
    switchLang: switchLang,
    loadLocale: loadLocale,
    applyTranslations: applyTranslations,
    supported: SUPPORTED
  };

  // Auto-apply translations when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    loadLocale(currentLang()).then(applyTranslations).catch(function () {
      // silently fail – static text in HTML is the fallback
    });
  });
})();
