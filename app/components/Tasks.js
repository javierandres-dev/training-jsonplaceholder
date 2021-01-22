"use strict";
// set up the view of the tasks
export default function Tasks() {
  const $tasks = document.createElement("div");
  $tasks.setAttribute("id", "tasksModal");
  $tasks.setAttribute("tabindex", "-1");
  $tasks.classList.add("modal", "fade");
  $tasks.innerHTML = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header bg-info text-white">
      <h5 class="modal-title">Tasks</h5>
      <button type="button" class="close text-white" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul id="taskResume" class="list-inline text-info"></ul>
      <ul id="taskList" class="list-unstyled"></ul>
    </div>
  </div>
</div>
  `;
  return $tasks;
}
