"use strict";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Aside from "./components/Aside.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";
// first component, call start components and router
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
