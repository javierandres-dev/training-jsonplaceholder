'use strict';
// set up Bottom component
export default function Bottom() {
  const $bottom = document.createElement('div');
  $bottom.classList.add('dev');
  $bottom.innerHTML = `
<div class="dev">
  <div class="bottom">
    <a
      href="https://www.javierandresgp.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>© Built by</span>
      <img src="./app/images/avatar.png" alt="Javier Andrés GP" />Javier Andrés
      GP</a
    >
  </div>
</div>
  `;
  return $bottom;
}
