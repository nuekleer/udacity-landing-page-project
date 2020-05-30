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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addListeners() {
    const anchorArray = document.querySelectorAll(".menu__link");
    for(var i = 0; i < anchorArray.length; i++){
        anchorArray[i].addEventListener('click', function () {
            event.preventDefault();
            document.getElementById(this.attributes[0].value.substr(1)).scrollIntoView({
                behavior: 'smooth'
            });
            var sectionArray = document.getElementsByTagName("SECTION");
            for(var j = 0; j < sectionArray.length; j++){
                if(sectionArray[j].id == this.attributes[0].value.substr(1)){
                    sectionArray[j].className = "your-active-class";
                }
                else{
                    sectionArray[j].className = "";
                }
            }
        });
    }
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
        newListItem.innerHTML = `<a href=#${sections[i].id} class="menu__link">` +sections[i].dataset.nav + "</a>";
        //newListItem.classList.add("menu__link");
        navList.append(newListItem);
    };
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
addListeners();

// Set sections as active
window.addEventListener('scroll', function (){

})

