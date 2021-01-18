export default function Main() {
  const $main = document.createElement("main");
  $main.setAttribute("role", "main");
  $main.classList.add("container", "mb-5");
  return $main;
}
