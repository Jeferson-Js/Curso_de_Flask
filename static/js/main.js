function btnMobile(e) {
  const list = document.querySelector("#list");
  list.classList.toggle("hidden");
  e.name == "menu" ? (e.name = "close") : (e.name = "menu");
}
