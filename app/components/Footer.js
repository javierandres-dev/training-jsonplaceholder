export default function Footer() {
  const d = document,
    $footer = d.createElement("footer");
  $footer.innerHTML = `
    <nav class="nav">
      <span class="nav-link disabled" tabindex="-1" >&copy;</span>
      <a class="nav-link" href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noopener noreferrer">API</a>
      <a class="nav-link" href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer">Styles</a>
      <a class="nav-link" href="https://emojipedia.org/"
          target="_blank"
          rel="noopener noreferrer">Emoji</a>
      <a class="nav-link" href="https://www.javierandresgp.com"
          target="_blank"
          rel="noopener noreferrer">Developer</a>
    </nav>
  `;
  return $footer;
}
