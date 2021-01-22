"use strict";
// set up the view of the comments
export default function Comments() {
  const $comments = document.createElement("div");
  $comments.setAttribute("id", "commentsModal");
  $comments.setAttribute("tabindex", "-1");
  $comments.classList.add("modal", "fade");
  $comments.innerHTML = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header bg-info text-white">
      <h5 class="modal-title">Comments</h5>
      <button type="button" class="close" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body"><h6 id="commentsResume" class="text-info"></h6>
      <ul id="commentsContent" class="list-group"></ul>
    </div>
</div>
  `;
  return $comments;
}
