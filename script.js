const header = document.getElementById("header");
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");

const searchDropdown = document.getElementById("searchDropdown");
let isInsideSearch = false;


searchContainer.addEventListener("mouseenter", () => {
  isInsideSearch = true;
  header.classList.add("search-active");

  setTimeout(() => {
    searchInput.focus();
  }, 400);
});


searchContainer.addEventListener("mouseleave", () => {
  isInsideSearch = false;

  setTimeout(() => {
    if (!isInsideSearch) {
      closeSearchDropdown();
    }
  }, 100);
});


searchDropdown.addEventListener("mouseenter", () => {
  isInsideSearch = true;
});


searchDropdown.addEventListener("mouseleave", () => {
  isInsideSearch = false;
  closeSearchDropdown();
});


function closeSearchDropdown() {
  header.classList.remove("search-active");
  searchInput.blur();
}


searchOverlay.addEventListener("click", closeSearchDropdown);


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && header.classList.contains("search-active")) {
    closeSearchDropdown();
  }
});


searchDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});
