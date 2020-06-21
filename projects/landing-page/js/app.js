/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 
*/
const mainSections = ["Section 1", "Section 2", "Section 3"];

const navBarList = document.getElementById("navbar__list");
const topButton = document.querySelector(".myBtn");
const navBarItems = navBarList.childNodes;
const sectionsHeights = Array.from(document.querySelectorAll("main section")).map(
    el => el.offsetTop - 100
);

let isScrolling = false;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function triggerNavActive(el) {
    navBarItems.forEach(el => el.classList.remove("navActive"));
    el.classList.add("navActive");
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", (e) => {
    setTimeout(
        () => {
            const offsetTop = window.pageYOffset;
            sectionsHeights.forEach((el, i) => {
                if (offsetTop >= el) {

                    // Set sections as active
                    navBarItems.forEach(el => el.classList.remove("navActive"));
                    navBarItems[i].classList.add("navActive");
                } else if (offsetTop < 431) {
                    navBarItems.forEach(el => el.classList.remove("navActive"));

                }
            });

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        },
        150
    );
});

topButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})

// Build menu 
for (let link of mainSections) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const sectionName = document.createTextNode(link);
    const sectionId = document.querySelector(`section[data-nav="${link}"]`).id;

    li.appendChild(a);
    a.appendChild(sectionName);
    a.classList.add("menu__link");

    navBarList.appendChild(li);
}

// Scroll to section on link click
navBarItems.forEach(
    (el, index) => {
        el.addEventListener("click", (e) => {

            // Set sections as active
            triggerNavActive(el);

            // Scroll to anchor ID using scrollTO event
            window.scrollTo({
                top: sectionsHeights[index] + 100,
                behavior: "auto"
            });
            
        });
    }
);