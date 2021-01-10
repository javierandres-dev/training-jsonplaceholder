export default function Photos() {
  const $photos = document.createElement("div");
  $photos.setAttribute("id", "photosModal");
  $photos.setAttribute("tabindex", "-1");
  $photos.classList.add("modal", "fade");
  $photos.innerHTML = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header bg-info text-white">
      <h5 class="modal-title">Photos</h5>
      <button type="button" class="close text-white" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body"><h6 id="photosResume" class="text-info"></h6>
      <ul id="photosContent" class="list-unstyled"></ul></div>
  </div>
</div>
  `;
  return $photos;
}
