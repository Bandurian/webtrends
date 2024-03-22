// SHOW SIDEBAR
const navMenu = document.getElementById('sidebar'),
      navToogle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close')

if(navToogle) {
    navToogle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

// SIDEBAR HIDDEN
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

// MIXITUP FILTER TRENDS
let mixerPortfolio = mixitup('.trends__container', {
    selectors: {
        target: '.trend__card'
    },
    animation: {
        duration: 300
    }
});

// Link Active Trend
const linkTrend = document.querySelectorAll('.trend__item')

function activeTrend() {
    linkTrend.forEach(l=> l.classList.remove('active-trend'))
    this.classList.add('active-trend')
}

linkTrend.forEach(l=> l.addEventListener("click", activeTrend))

// SCROLL SECTIONS ACTIVE LINK
// get all secions that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset;
    // Now we loop though sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector*/
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}


// SHOW SCROLL UP
//Get the button
var mybutton = document.getElementById("BtnToTop");

// When the user scrolls down 20px from the top of the document, show the button
document.addEventListener('scroll', function(e)
{
    scrollFunction();
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("uil-sun");
    dayNight.querySelector("i").classList.toggle("uil-moon");
    document.body.classList.toggle("light");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.add("uil-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("uil-sun");
    }
})

