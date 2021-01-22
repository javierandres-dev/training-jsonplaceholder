"use strict";
export default function Nav() {
  const $nav = document.createElement("nav");
  $nav.classList.add("navbar", "navbar-expand-md", "navbar-light", "bg-light");
  $nav.innerHTML = `
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <div class="navbar-nav mx-auto">
        <a class="nav-link" href="#/">Home</a>
        <a class="nav-link dropdown-toggle" href="#" id="endpoints" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Endpoints
        </a>
        <div class="dropdown-menu" aria-labelledby="endpoints">
          <a class="nav-link" href="#/all-users">Users</a>
          <a class="nav-link" href="#/all-todos">Todos</a>
          <a class="nav-link" href="#/all-albums">Albums</a>
          <a class="nav-link" href="#/all-photos">Photos</a>
          <a class="nav-link" href="#/all-posts">Posts</a>
          <a class="nav-link" href="#/all-comments">Comments</a>
        </div>
      </div>
    </div>
  `;
  return $nav;
}
