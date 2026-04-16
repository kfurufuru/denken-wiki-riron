/**
 * 進捗トラッカー — LocalStorage でページ既読状態を保存
 * 電験3種 理論Wiki 用
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'denken_wiki_riron_progress';
  const CHECKABLE_PATHS = [
    'themes/', 'kakomon/', 'reference/', 'roadmap/'
  ];

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function getCurrentPath() {
    return window.location.pathname;
  }

  function isCheckablePage() {
    const path = getCurrentPath();
    return CHECKABLE_PATHS.some(p => path.includes(p));
  }

  function addCheckButton() {
    if (!isCheckablePage()) return;

    const path = getCurrentPath();
    const progress = getProgress();
    const isDone = !!progress[path];

    const existing = document.getElementById('progress-tracker-btn');
    if (existing) existing.remove();

    const btn = document.createElement('div');
    btn.id = 'progress-tracker-btn';
    btn.className = 'progress-tracker';
    btn.innerHTML = isDone
      ? '&#x2705; 学習済み（クリックで解除）'
      : '&#x2610; 学習済みにする';

    btn.addEventListener('click', function () {
      const current = getProgress();
      if (current[path]) {
        delete current[path];
      } else {
        current[path] = true;
      }
      saveProgress(current);
      addCheckButton();
    });

    document.body.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', addCheckButton);

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      addCheckButton();
    });
  }
})();
