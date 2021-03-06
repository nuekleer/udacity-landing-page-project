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
var navList = document.getElementById("navbar__list");
var sections = document.getElementsByTagName("SECTION");
var height = window.innerHeight;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//loops through sections and anchors and sets the id passed in to active - removes any others
function activeSection(sectionName){
    for(var i = 0; i < sections.length; i++){
        sections[i].className = "";
        if (sections[i].id == sectionName){
            sections[i].className = "your-active-class";
        }
    }
    const anchorArray = document.querySelectorAll(".menu__link");
    for(var i = 0; i < anchorArray.length; i++){
        anchorArray[i].classList.remove("your-active-class");
        if(anchorArray[i].attributes[0].value.substr(1) == sectionName){
            anchorArray[i].classList.add("your-active-class"); 
        }
    }
}

//check which section is currently visible and call helper to set style
function inView() {
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var top = sections[i].getBoundingClientRect().top;

        if (top - height <= 0) {
            activeSection(sections[i].id);
        }
    }
}

//just get the new size
function getWindowSize() {
    height = window.innerHeight;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    for(var i = 0; i < sections.length; i++){
        var newListItem = document.createElement("LI");
        if(i == 0){
            newListItem.innerHTML = `<a href=#${sections[i].id} class="menu__link your-active-class">${sections[i].dataset.nav}</a>`;
        }
        else{
            newListItem.innerHTML = `<a href=#${sections[i].id} class="menu__link">${sections[i].dataset.nav}</a>`;
        }
        navList.append(newListItem);
    };
}

//add listeners to each menu item to scroll when clicked
function addListeners() {
    const anchorArray = document.querySelectorAll(".menu__link");
    for(var i = 0; i < anchorArray.length; i++){
        anchorArray[i].addEventListener('click', function () {
            event.preventDefault();
            activeSection(this.attributes[0].value.substr(1));
            document.getElementById(this.attributes[0].value.substr(1)).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
addListeners();

//change style when section is in view
window.addEventListener('scroll', inView);

//reset window size if screen size changes
window.addEventListener('resize', getWindowSize);

//if page is refreshed start again at the top
window.addEventListener('load', function(){
    //had to add a set timeout or scroll would not work
    //this.scrollTo(0,0);
    setTimeout(function () {
        window.scrollTo(0, 0);
    },20);
});

