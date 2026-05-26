let currentChapter = 0;
let readChapters   = new Set();
let fontLevel      = 0;
let dark           = false;

// ── Renderiza o nav lateral ──
function buildNav() {
  const nav = document.getElementById('sidebarNav');
  const groups = {
    'Introdução': [0],
    'Capítulos':  [1, 2, 3, 4, 5, 6, 7, 8],
    'Guia Final': [9],
  };

  let html = '';
  for (const [label, ids] of Object.entries(groups)) {
    html += `<div class="nav-group-label">${label}</div>`;
    ids.forEach(id => {
      const ch = CHAPTERS[id];
      html += `
        <a class="nav-item" data-chapter="${id}" onclick="goChapter(${id})">
          <span class="nav-item-num">${ch.label.replace('Capítulo ', '').replace('Introdução', '—').replace('Guia Final', '—')}</span>
          <span class="nav-item-title">${ch.title}</span>
          <span class="nav-item-check"></span>
        </a>`;
    });
  }
  nav.innerHTML = html;
}

// ── Navega para um capítulo ──
function goChapter(idx) {
  readChapters.add(currentChapter);
  currentChapter = idx;

  document.querySelectorAll('.nav-item').forEach(el => {
    const id = parseInt(el.dataset.chapter);
    el.classList.toggle('active', id === idx);
    if (readChapters.has(id)) el.classList.add('read');
  });

  const ch = CHAPTERS[idx];
  document.getElementById('readerContent').innerHTML = ch.content + buildBottomNav(idx);
  document.getElementById('topbarChapter').textContent = ch.label + ' — ' + ch.title;
  document.getElementById('readerScroll').scrollTo({ top: 0, behavior: 'instant' });

  updateProgress();
  if (window.innerWidth <= 768) closeSidebar();
}

// ── Botões anterior / próximo ──
function buildBottomNav(idx) {
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
  return `
    <div class="chapter-nav-bottom">
      <button class="chapter-nav-btn" onclick="goChapter(${idx - 1})" ${!prev ? 'disabled' : ''}>
        ← ${prev ? prev.title : ''}
      </button>
      <button class="chapter-nav-btn" onclick="goChapter(${idx + 1})" ${!next ? 'disabled' : ''}>
        ${next ? next.title : ''} →
      </button>
    </div>`;
}

// ── Barra de progresso ──
function updateProgress() {
  readChapters.add(currentChapter);
  const pct = Math.round((readChapters.size / CHAPTERS.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressPct').textContent  = pct + '%';
}

// ── Fonte ──
function changeFontSize(dir) {
  fontLevel = Math.max(-1, Math.min(1, fontLevel + dir));
  document.body.classList.remove('font-sm', 'font-lg');
  if (fontLevel === -1) document.body.classList.add('font-sm');
  if (fontLevel ===  1) document.body.classList.add('font-lg');
}

// ── Dark mode ──
function toggleDark() {
  dark = !dark;
  document.body.classList.toggle('dark', dark);
  document.getElementById('darkBtn').textContent = dark ? '☀️' : '🌙';
}

// ── Sidebar mobile ──
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

// ── Init ──
buildNav();
goChapter(0);
