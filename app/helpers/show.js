import queryApi from "./rest-api.js";
const d = document;
async function showUser(id) {
  const user = await queryApi(`users/${id}`);
  const $user = d.getElementById("userContent");
  $user.innerHTML = `
<li class="list-group-item">
  <span class="text-info">Fullname:</span> ${user.name}
</li>
<li class="list-group-item">
  <span class="text-info">Nickname:</span> ${user.username}
</li>
<li class="list-group-item">
  <span class="text-info">Email:</span>
  <span class="text-lowercase">${user.email}</span>
</li>
<li class="list-group-item">
  <span class="text-info">Address:</span>
  <ul>
    <li><span class="text-info">Street:</span> ${user.address.street}</li>
    <li><span class="text-info">Suite:</span> ${user.address.suite}</li>
    <li><span class="text-info">City:</span> ${user.address.city}</li>
    <li><span class="text-info">ZIP Code:</span> ${user.address.zipcode}&nbsp;<a href="https://www.google.com/maps/@?api=1&map_action=map&center=${user.address.geo.lat},${user.address.geo.lng}&zoom=12&basemap=satellite" target="_blank" rel="noopener noreferrer">View in Google Maps</a></li>
  </ul>
</li>
<li class="list-group-item">
  <span class="text-info">Phone:</span> ${user.phone}
</li>
<li class="list-group-item">
  <span class="text-info">Website:</span> ${user.website}
</li>
<li class="list-group-item">
  <span class="text-info">Company:</span>
  <ul>
    <li><span class="text-info">Name:</span> ${user.company.name}</li>
    <li><span class="text-info">
      Catchphrase:</span> ${user.company.catchPhrase}
    </li>
    <li>
      <span class="text-info">Business Strategy:</span> ${user.company.bs}
    </li>
  </ul>
</li>
<li class="list-group-item">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <button type="button" class="btn btn-link text-info" name="btnTasks"  data-toggle="modal" data-target="#tasksModal" data-userId="${user.id}">Tasks</button>
    </li>
    <li class="breadcrumb-item">
      <button type="button" class="btn btn-link text-info" name="btnPosts"  data-toggle="modal" data-target="#postsModal" data-userId="${user.id}">Posts</button>
    </li>
    <li class="breadcrumb-item">
      <button type="button" class="btn btn-link text-info" name="btnAlbums" data-toggle="modal" data-target="#albumsModal" data-userId="${user.id}">Albums</button>
    </li>
  </ol>
</li>
  `;
}
async function showTasks(id) {
  const tasks = await queryApi(`users/${id}/todos`);
  const $tList = d.getElementById("taskList");
  const $tResume = d.getElementById("taskResume");
  $tList.innerHTML = "";
  $tResume.innerHTML = "";
  let completed = 0,
    item = 0;
  tasks.forEach((task) => {
    item++;
    if (task.completed === true) {
      completed++;
      $tList.innerHTML += `
<li><span class="text-info">${item} <span class="badge badge-success badge-pill px-2"> 👍 </span></span><br><span class="text-uppercase">${task.title}</span></li>
    `;
    } else {
      $tList.innerHTML += `
 <li><span class="text-info">${item} <span class="badge badge-danger badge-pill px-2"> 👎 </span></span><br><span class="text-uppercase">${task.title}</span></li>
      `;
    }
    $tResume.innerHTML = `
<li class="list-inline-item">Total tasks: <b>
  <span class="badge badge-secondary badge-pill px-2">${tasks.length}</b></span>
</li>
<li class="list-inline-item">Tasks completed
  <span class="badge badge-success badge-pill px-2"> ${completed}</span>
</li>
<li class="list-inline-item">Tasks incomplete
  <span class="badge badge-danger badge-pill px-2"> ${
    tasks.length - completed
  }</span>
</li>
    `;
  });
}
async function showPosts(id) {
  const posts = await queryApi(`users/${id}/posts`);
  const $content = d.getElementById("postContent");
  const $resume = d.getElementById("postResume");
  $content.innerHTML = "";
  $resume.innerHTML = `${posts.length} posts.`;
  let item = 0;
  posts.forEach((post) => {
    item++;
    $content.innerHTML += `
<div class="card-body">
  <span class="text-info">${item} 📄</span><br>
  <h5 class="card-title text-uppercase">${post.title}</h5>
  <p class="card-text">${post.body}.</p>
</div>
<div class="card-footer border-top-0 border-bottom border-secondary">
    <button type="button" class="btn btn-link text-info" name="btnComments" data-toggle="modal" data-target="#commentsModal" data-postId="${post.id}">See comments</button>
</div>
    `;
  });
}
async function showComments(id) {
  const comments = await queryApi(`posts/${id}/comments`);
  const $content = d.getElementById("commentsContent");
  const $resume = d.getElementById("commentsResume");
  $resume.innerHTML = `${comments.length} comments.`;
  $content.innerHTML = "";
  let item = 0;
  comments.forEach((comment) => {
    item++;
    $content.innerHTML += `
<li class="list-group-item">
  <span class="text-info">${item} 🗨️</span><br>
  <p><em>${comment.body}</em></p>
  👤 <span class="text-capitalize">${comment.name}</span><br>
  📭 <span class="text-lowercase">${comment.email}</span>
  <hr class="border-bottom border-secondary">
</li>
    `;
  });
}
async function showAlbums(id) {
  const albums = await queryApi(`users/${id}/albums`);
  const $content = d.getElementById("albumsContent");
  const $resume = d.getElementById("albumsResume");
  $resume.innerHTML = `${albums.length} albums.`;
  $content.innerHTML = "";
  let item = 0;
  albums.forEach((album) => {
    item++;
    $content.innerHTML += `
<li class="list-group-item">
  <span class="text-info">${item} 📚</span><br>
  <span class="text-uppercase">${album.title}</span>
    <button type="button" class="btn btn-link text-info" name="btnPhotos" data-toggle="modal" data-target="#photosModal" data-albumId="${album.id}">See photos</button>
</li>
    `;
  });
}
async function showPhotos(id) {
  const photos = await queryApi(`albums/${id}/photos`);
  const $content = d.getElementById("photosContent");
  const $resume = d.getElementById("photosResume");
  $resume.innerHTML = `${photos.length} photos.`;
  $content.innerHTML = "";
  let item = 0;
  photos.forEach((photo) => {
    item++;
    $content.innerHTML += `
<li class="media">
  <img src="${photo.thumbnailUrl}" class="mr-3" alt="${photo.title}">
  <div class="media-body">
    <h5 class="mt-0 mb-1 text-uppercase">${photo.title}</h5>
    <span class="text-info">${item} 📷</span><br>
    <a class="stretched-link" href="${photo.url}" target="_blank" rel="noopener noreferrer">View large image.</a>
  </div>
</li>
    `;
  });
}
export { showUser, showTasks, showPosts, showComments, showAlbums, showPhotos };
