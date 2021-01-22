"use strict";
import Spinner from "./Spinner.js";
import queryApi from "../helpers/rest-api.js";
import Users from "./Users.js";
import User from "./User.js";
import Tasks from "./Tasks.js";
import Posts from "./Posts.js";
import Comments from "./Comments.js";
import Albums from "./Albums.js";
import Photos from "./Photos.js";
export default async function Router() {
  const d = document,
    $main = d.querySelector("main");
  $main.appendChild(Spinner());
  Promise.all([
    queryApi("posts"),
    queryApi("comments"),
    queryApi("albums"),
    queryApi("photos"),
    queryApi("todos"),
    queryApi("users"),
  ])
    .then((data) => {
      const [posts, comments, albums, photos, todos, users] = data,
        { hash } = location,
        $h2 = d.createElement("h2"),
        $p = d.createElement("p"),
        $aside = d.querySelector("aside");
      $h2.classList.add("text-center");
      //$main.innerHTML = null;
      if (hash === "" || hash === "#/") {
        $h2.textContent = "Welcome";
        $main.appendChild($h2);
        $p.classList.add("lead");
        $p.textContent =
          "I created this SPA using vanilla JavaScript, for the styles I used Bootstrap.  It is created base on all the data available in the REST API JSONplaceholder.";
        $main.appendChild($p);
        $main.appendChild(Users());
        const $users = d.getElementById("usersContent");
        $users.innerHTML = "";
        users.forEach((user) => {
          $users.innerHTML += `
<li class="list-group-item">
  <button type="button" class="btn btn-link text-info" name="btnUser" data-toggle="modal" data-target="#userModal" data-userId="${user.id}">${user.name}</button>
</li>
          `;
        });
        $aside.appendChild(User());
        $aside.appendChild(Tasks());
        $aside.appendChild(Posts());
        $aside.appendChild(Comments());
        $aside.appendChild(Albums());
        $aside.appendChild(Photos());
      } else {
        let flag = 0;
        switch (hash) {
          case "#/all-users":
            $h1.textContent = `There are ${users.length} users.`;
            console.info("Users:", users);
            break;
          case "#/all-posts":
            $h1.textContent = `There are ${posts.length} posts.`;
            console.info("Posts:", posts);
            break;
          case "#/all-albums":
            $h1.textContent = `There are ${albums.length} albums.`;
            console.info("Albums:", albums);
            break;
          case "#/all-todos":
            $h1.textContent = `There are ${todos.length} todos.`;
            console.info("Todos:", todos);
            break;
          case "#/all-comments":
            $h1.textContent = `There are ${comments.length} comments.`;
            console.info("Comments:", comments);
            break;
          case "#/all-photos":
            $h1.textContent = `There are ${photos.length} photos.`;
            console.info("Photos:", photos);
            break;
          default:
            $h1.textContent = `Oops! Page not found.`;
            flag++;
            break;
        }
        $main.appendChild($h1);
        if (flag === 0) {
          $p.textContent =
            "You can open the browser console to see all data of the query.";
          $main.appendChild($p);
        }
      }
      $main.removeChild($main.firstChild);
    })
    .catch((error) => {
      console.error(error);
    });
}
