/* ============================================================
   Dreamy Portal Theme Switcher (Keyboard Controls + Legend)
   ------------------------------------------------------------
   - Press 1 → Dreamy ✨
   - Press 2 → Misty 🌫️
   - Press 3 → Cosmic 🌌
   Themes are applied by swapping CSS variables defined in :root.
   A floating legend shows the shortcuts.
=========================================================== */

/* === Grab the root element (where CSS variables live) === */
const root = document.documentElement;

/* === Define theme presets as objects ===
   Each theme is modular: change values here to adjust look.
   Add new themes by extending this object.
=========================================================== */
const themes = {
  dreamy: {
    '--bg-main': '#191932',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(255,255,255,0.08)',
    '--fog2-color': 'rgba(200,200,255,0.05)',
    '--heading-color': 'rgba(255,255,255,0.8)',
    '--heading-glow': 'rgba(255,255,255,0.4)'
  },
  misty: {
    '--bg-main': '#2a2a2a',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(255,255,255,0.12)',
    '--fog2-color': 'rgba(180,180,180,0.08)',
    '--heading-color': 'rgba(240,240,240,0.85)',
    '--heading-glow': 'rgba(200,200,200,0.3)'
  },
  cosmic: {
    '--bg-main': '#0b0033',
    '--bg-fade': '#000000',
    '--fog1-color': 'rgba(150,0,255,0.08)',
    '--fog2-color': 'rgba(0,200,255,0.05)',
    '--heading-color': 'rgba(255,255,255,0.9)',
    '--heading-glow': 'rgba(0,200,255,0.5)'
  }
};

/* === Apply a theme by name ===
   Loops through variables in the theme object and sets them.
=========================================================== */
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  for (const variable in theme) {
    root.style.setProperty(variable, theme[variable]);
  }
  console.log(`Applied theme: ${themeName}`);
}

/* === Keyboard shortcuts ===
   Listen for key presses and apply themes accordingly.
   Also show overlay feedback.
=========================================================== */
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '1':
      applyTheme('dreamy');
      showOverlay('✨ Dreamy');
      break;
    case '2':
      applyTheme('misty');
      showOverlay('🌫️ Misty');
      break;
    case '3':
      applyTheme('cosmic');
      showOverlay('🌌 Cosmic');
      break;
  }
});

/* === Overlay feedback ===
   Shows emoji + name briefly in the center when theme changes.
   Modular: adjust styling or duration as needed.
=========================================================== */
function showOverlay(label) {
  const overlay = document.createElement('div');
  overlay.textContent = label;
  overlay.style.position = 'fixed';
  overlay.style.top = '50%';
  overlay.style.left = '50%';
  overlay.style.transform = 'translate(-50%, -50%)';
  overlay.style.fontSize = '2rem';
  overlay.style.color = '#fff';
  overlay.style.textShadow = '0 0 10px rgba(255,255,255,0.7)';
  overlay.style.background = 'rgba(0,0,0,0.4)';
  overlay.style.padding = '0.5rem 1rem';
  overlay.style.borderRadius = '8px';
  overlay.style.zIndex = '9999';
  document.body.appendChild(overlay);

  setTimeout(() => overlay.remove(), 1000); // disappear after 1s
}

/* === Legend display ===
   Shows available shortcuts in bottom corner with emojis.
   Modular: update if you add new themes.
=========================================================== */
function showLegend() {
  const legend = document.getElementById('legend');
  legend.style.position = 'fixed';
  legend.style.bottom = '1rem';
  legend.style.left = '1rem';
  legend.style.color = '#fff';
  legend.style.fontSize = '1rem';
  legend.style.background = 'rgba(0,0,0,0.3)';
  legend.style.padding = '0.5rem 1rem';
  legend.style.borderRadius = '6px';
  legend.style.textShadow = '0 0 6px rgba(255,255,255,0.5)';
  legend.textContent = '1 ✨  2 🌫️  3 🌌';
}

/* === Initialize on page load ===
   Apply default theme and show legend.
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme('dreamy'); // default theme
  showOverlay('✨ Dreamy');
  showLegend(); // show shortcuts legend
});
