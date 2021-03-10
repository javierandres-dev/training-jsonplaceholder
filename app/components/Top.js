'use strict';
// set up Top component
export default function Top() {
  const $top = document.createElement('div');
  $top.classList.add('dev');
  $top.innerHTML = `
<div class="dev">
  <div class="top">
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
  return $top;
}
