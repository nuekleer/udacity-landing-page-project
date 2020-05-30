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
            const anchorArrayInner = document.querySelectorAll(".menu__link");
            for(var x = 0; x < anchorArrayInner.length; x++){
                anchorArrayInner[x].classList.remove("your-active-class");
            }
            this.classList.add("your-active-class");
            document.getElementById(this.attributes[0].value.substr(1)).scrollIntoView({
                behavior: 'smooth'
            });
            for(var j = 0; j < sections.length; j++){
                if(sections[j].id == this.attributes[0].value.substr(1)){
                    sections[j].className = "your-active-class";
                }
                else{
                    sections[j].className = "";
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
        if(i == 0){
            newListItem.innerHTML = `<a href=#${sections[i].id} class="menu__link your-active-class">` +sections[i].dataset.nav + "</a>";
        }
        else{
            newListItem.innerHTML = `<a href=#${sections[i].id} class="menu__link">` +sections[i].dataset.nav + "</a>";
        }
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


window.addEventListener('load', function(){
    //this.scrollTo(0,0);
    setTimeout(function () {
        window.scrollTo(0, 0);
    },2);
});

