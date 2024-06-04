// [+] For High Performance
const $ = document;

// [+] Functions
function removeClassName (className) {
    let target = $.querySelector(`.${className}`);

    target && target.classList.remove(className);
}