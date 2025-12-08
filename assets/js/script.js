/* ============================================================
   Dreamy Portal Theme Switcher
   ------------------------------------------------------------
   This script toggles CSS variables defined in :root to change
   the look and feel of the portal. Each theme is a set of values
   for background, fog, and text. Modular design allows easy
   extension with new themes.
=========================================================== */

/* === Grab the root element (where CSS variables live) === */
const root = document.documentElement;

/* === Define theme presets as objects === */
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

/* === Function to apply a theme === */
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) {
    console.warn(`Theme "${themeName}" not found.`);
    return;
  }
  // Loop through each variable in the theme and set it
  for (const variable in theme) {
    root.style.setProperty(variable, theme[variable]);
  }
  console.log(`Applied theme: ${themeName}`);
}

/* === Example usage ===
   You can call applyTheme('dreamy'), applyTheme('misty'),
   or applyTheme('cosmic') from anywhere in your code.
   For demo purposes, we’ll add simple buttons.
=========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Create a container for theme buttons
  const controls = document.createElement('div');
  controls.style.position = 'fixed';
  controls.style.bottom = '1rem';
  controls.style.right = '1rem';
  controls.style.display = 'flex';
  controls.style.gap = '0.5rem';

  // Helper to make a button
  function makeButton(label, theme) {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.padding = '0.5rem 1rem';
    btn.style.background = 'rgba(255,255,255,0.1)';
    btn.style.color = '#fff';
    btn.style.border = '1px solid rgba(255,255,255,0.2)';
    btn.style.borderRadius = '6px';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => applyTheme(theme));
    return btn;
  }

  // Add buttons for each theme
  controls.appendChild(makeButton('Dreamy', 'dreamy'));
  controls.appendChild(makeButton('Misty', 'misty'));
  controls.appendChild(makeButton('Cosmic', 'cosmic'));

  // Add controls to the page
  document.body.appendChild(controls);

  // Apply default theme on load
  applyTheme('dreamy');
});
