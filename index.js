var activePage = "home";

// utilities functions

function hide(id) {
  console.info("hide %o element", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  var oldlink = document.querySelector(
    `#top-menu-bar a[data-page=${activePage}]`
  );
  oldlink.classList.remove("active");

  hide(activePage);

  var link = document.querySelector(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  var page = document.getElementById(id);
  console.info("show %o", id, page);
  page.style.display = "block";

  activePage = id;
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

// start our code

showPage("home");
document.getElementById("top-menu-bar").addEventListener("click", clickOnMenu);
