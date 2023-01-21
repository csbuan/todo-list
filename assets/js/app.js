/*================ MENU SHOW Y HIDDEN ================*/
const navMenu = document.getElementById('navtoggle-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*================ MENU SHOW ================*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*================ MENU HIDDEN ================*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*================ REMOVE MENU MOBILE ================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*================ TODO LIST ITEMS ================*/
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#tasks-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = input.value;
    const createElement = document.createElement('div');
    createElement.classList.add('list__item');
    const newLI = document.createElement('input');
    newLI.type = "checkbox";
    const label = document.createElement('label');
    label.innerText = newTask;
    list.append(createElement);
    createElement.append(newLI);
    createElement.append(label);
    input.value = '';
})




// const toggle = document.getElementById('nav-toggle')
// const sidebar = document.getElementById('navtoggle-menu')

// let touchStart, touchEnd

// toggle.addEventListener('click', () => {
//     sidebar.classList.add('open')
//   })

//   sidebar.addEventListener(
//     'touchstart',
//     e => (touchStart = e.targetTouches[0].clientX)
//   )
  
//   sidebar.addEventListener(
//     'touchmove',
//     e => (touchEnd = e.targetTouches[0].clientX)
//   )
  
//   sidebar.addEventListener('touchend', e => {
//     if (touchStart - touchEnd > 45) {
//       sidebar.classList.remove('open')
//     }
//   })