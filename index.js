var activePage = "skills";

// utilities functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  console.info("hide %o element", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  var page = $("#" + id);
  console.info("show %o", id, page);
  page.style.display = "block";
}

function showPage(id) {
  var oldlink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldlink.classList.remove("active");

  hide(activePage);

  activePage = id;

  var link = $(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  show(activePage);
}

function clickOnMenu(e) {
  var link = e.target.closest("a");
  // console.warn("click", link, e.target);
  if (link) {
    var id = link.dataset.page;
    // console.warn("click", e.target.getAttribute("data-page"));
    // console.warn("click %o menu", id);
    if (id) {
      showPage(id);
    }
  }
}

function showSkills() {
  var skills = [];
  var htmlSkills = skills.map(function (skill) {
    // <li class="favorite">HTML</li>
    console.info("skill", skill);
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}</li>`;
  });
  var ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}

function loadSkills() {
  var r1 = fetch("skills.json");
  console.warn("1", r1);
  var r2 = r1.then(function (r) {
    console.info("2.ready");
    return r.json();
  });
  r2.then(function (a) {
    console.warn("a", a);
  });
  console.warn("3.r2", r2);
  // ....
  showSkills();
}

// start our code

showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
