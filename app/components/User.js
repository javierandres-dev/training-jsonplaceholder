export default function User() {
  const $user = document.createElement("div");
  $user.setAttribute("id", "userModal");
  $user.setAttribute("tabindex", "-1");
  $user.classList.add("modal", "fade");
  $user.innerHTML = `
<div class="modal-dialog modal-dialog modal-xl">
  <div class="modal-content">
    <div class="modal-header bg-info text-white">
      <h5 class="modal-title">User</h5>
      <button type="button" class="close text-white" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body"><ul id="userContent" class="list-group"></ul></div>
  </div>
</div>
  `;
  return $user;
}
