const header = document.querySelector("#header");
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down
        header.style.top = "-150px";
    } else {
        // Scroll up
        header.style.top = '0px';
    }
    lastScrollTop = scrollTop;
});

console.log("akddbgu")