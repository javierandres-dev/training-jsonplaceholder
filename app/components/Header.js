export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("border-bottom");
  $header.innerHTML = `
    <nav class="nav justify-content-end">
      <span class="nav-link disabled" tabindex="-1">Built by <a class="nav-link" href="https://www.javierandresgp.com"
          target="_blank"
          rel="noopener noreferrer">Javier Andrés GP</a>.&nbsp;&nbsp;Found a bug or have an idea? Contact me</span>
    </nav>
  `;
  return $header;
}
