export default function Posts() {
  const $posts = document.createElement("div");
  $posts.setAttribute("id", "postsModal");
  $posts.setAttribute("tabindex", "-1");
  $posts.classList.add("modal", "fade");
  $posts.innerHTML = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header bg-info text-white">
      <h5 class="modal-title">Post list</h5>
      <button type="button" class="close text-white" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h6 id="postResume" class="text-info"></h6>
      <div class="card-deck">
        <div id="postContent" class="card"></div>
      </div>
    </div>
  </div>
</div>
  `;
  return $posts;
}
