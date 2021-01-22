"use strict";
export default function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("dev");
  $footer.innerHTML = `
<h2>
  © Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP</a
  >
</h2>
  `;
  return $footer;
}
