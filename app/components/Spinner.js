"use strict";
export default function Spinner() {
  const $spinner = document.createElement("div");
  $spinner.classList.add("spinner-border", "text-info", "my-5");
  $spinner.innerHTML = `<span class="sr-only">Loading...</span>`;
  return $spinner;
}
