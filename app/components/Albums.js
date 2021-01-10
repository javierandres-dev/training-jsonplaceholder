export default function Albums() {
  const $albums = document.createElement("div");
  $albums.setAttribute("id", "albumsModal");
  $albums.setAttribute("tabindex", "-1");
  $albums.classList.add("modal", "fade");
  $albums.innerHTML = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header bg-info text-white">
      <h5 class="modal-title">Albums</h5>
      <button type="button" class="close text-white" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body"><h6 id="albumsResume" class="text-info"></h6>
      <ul id="albumsContent" class="list-group"></ul></div>
  </div>
</div>
  `;
  return $albums;
}
