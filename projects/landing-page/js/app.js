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
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const navLinks = ["Section 1", "Section 2", "Section 3"];

const navBarList = document.getElementById("navbar__list");
const navBarItems = navBarList.childNodes;
const sectionsHeights = Array.from(document.querySelectorAll("main section")).map(
    el => el.offsetTop
);

// for (let link of navLinks) {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const sectionId = document.querySelector(`section[data-nav="${link}"]`).id;
//     // console.log(sectionId);
//     li.appendChild(a);
//     a.textContent = link;
//     a.classList.add("menu__link");
    
//     a.setAttribute("href", `#${sectionId}`);
//     navBarList.appendChild(li);
// }

for (let link of navLinks) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const sectionName = document.createTextNode(link);
    const sectionId = document.querySelector(`section[data-nav="${link}"]`).id;
    
    li.appendChild(a);
    a.appendChild(sectionName);
    a.classList.add("menu__link");
    
    a.setAttribute("href", `#${sectionId}`);
    navBarList.appendChild(li);
}

function navActiveState(e) {
    navBarItems.forEach(el => el.classList.remove("navActive"));
    this.classList.add("navActive");
}

navBarItems.forEach(
    (el, index) => {
        el.addEventListener("click", navActiveState);
    } 
);

document.addEventListener("scroll", (e) => {
    setTimeout(
        () => {
            const offsetTop = window.pageYOffset;
            console.log(offsetTop);
            sectionsHeights.forEach((el, i) => {
                if (offsetTop >= el) {
                    navBarItems.forEach(el => el.classList.remove("navActive"));
                    navBarItems[i].classList.add("navActive");
                } else if (offsetTop < 471) {
                    navBarItems.forEach(el => el.classList.remove("navActive"));

                }
            })
        },
        100
    );
})