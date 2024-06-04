// [+] Defining Variables
const galleryButtons = $.querySelectorAll(".gallery-list__item");

// [+] Functions
function changeGallerySection(){
    removeClassName("gallery-list__item--active");
    removeClassName("gallery-container--show");

    // Show Section Handling
    let dataName = this.dataset.name;
    let targetSection = $.querySelector(`.gallery-container[data-name="${dataName}"]`);

    this.classList.add("gallery-list__item--active");
    targetSection.classList.add("gallery-container--show");
}

// [+] Events Handling
galleryButtons.forEach((button) => {
    button.addEventListener("click", changeGallerySection);
})