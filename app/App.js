/**
 * Main component
 * Here the call of the other components is centralized
 */
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Aside from "./components/Aside.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";
export function App() {
  const $body = document.querySelector("body");
  $body.innerHTML = null;
  $body.insertAdjacentElement("afterbegin", Header());
  $body.appendChild(Nav());
  $body.appendChild(Main());
  $body.appendChild(Aside());
  $body.insertAdjacentElement("beforeend", Footer());
  Router();
}
