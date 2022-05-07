const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", function(){
    //links.classList.toggle("show-links");
    // to calculate the height of the links dynamically 
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ***fixed navbar **
window.addEventListener("scroll", function(){
    const scrollHeight = this.window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
// setup back to top link
    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})
// **smooth scrolling
//select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    links.addEventListener("click", function (e) {
        e.preventDefault();
        //navigate to specific spot wanted
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position -navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position,
        });
        // close
        linksContainer.style.height = 0;
    });
});