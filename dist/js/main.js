// select DOM Item (Document Object Model)
// this part is for defining the menu button and the actions happen by clicking on it.
// here we define 4 const for 4 classes in <head>
const menuBtn = document.querySelector('.menu-btn');   //what is btn.menu?
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
// define s.th. like an array for the items in the menu
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;           //let is opposite of const -> can be redefined many times. 

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){                          //if showMenu is false. -> the state of not showing menu. Now clicking on it to see what happens 
        menuBtn.classList.add('close');     //in js. we can add a class like this
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));   
//show and close are the methods which adds/removes to the available classes. close and show will be defined in css file.
        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');     //in js. we can add a class like this
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show')); 

        //Set Menu State
        showMenu = false;
    }
}

