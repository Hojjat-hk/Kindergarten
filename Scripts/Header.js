// [+] Defining Variables
const searchBox = $.querySelector(".search-box");
const showSearchBoxBtn  = $.querySelector(".nav__search");
const closeSearchBoxBtn = $.querySelector(".search-box__close");
const showMenuBtn = $.querySelector(".nav__button");
const menu = $.querySelector(".nav-menu");

// [+] Functions
function showSearchBox(){
    searchBox.classList.add("search-box--show");
}

function closeSearchBox(){
    searchBox.classList.remove("search-box--show");
}

function showMenu(){
    searchBox.classList.contains("search-box--show") && searchBox.classList.remove("search-box--show");
    this.classList.toggle("nav__button--active");
    menu.classList.toggle("nav-menu--show");
}

// [+] Events Handling
showSearchBoxBtn.addEventListener("click", showSearchBox);
closeSearchBoxBtn.addEventListener("click", closeSearchBox);
showMenuBtn.addEventListener("click", showMenu);