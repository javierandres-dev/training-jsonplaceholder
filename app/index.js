"use strict";
import { App } from "./App.js";
import {
  showUser,
  showTasks,
  showPosts,
  showComments,
  showAlbums,
  showPhotos,
} from "./helpers/show.js";
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
document.addEventListener("click", (e) => {
  if (e.target.name === "btnUser") {
    const userId = e.target.getAttribute("data-userId");
    showUser(userId);
  }
  if (e.target.name === "btnTasks") {
    const userId = e.target.getAttribute("data-userId");
    showTasks(userId);
  }
  if (e.target.name === "btnPosts") {
    const userId = e.target.getAttribute("data-userId");
    showPosts(userId);
  }
  if (e.target.name === "btnComments") {
    const postId = e.target.getAttribute("data-postId");
    showComments(postId);
  }
  if (e.target.name === "btnAlbums") {
    const userId = e.target.getAttribute("data-userId");
    showAlbums(userId);
  }
  if (e.target.name === "btnPhotos") {
    const albumId = e.target.getAttribute("data-albumId");
    showPhotos(albumId);
  }
});
