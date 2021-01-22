"use strict";
// set up the view of the users list
export default function Users() {
  const $users = document.createElement("ul");
  $users.setAttribute("id", "usersContent");
  $users.classList.add("list-group", "list-group-flush", "shadow-lg");
  return $users;
}
