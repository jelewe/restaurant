console.log('hi')

import pageLoader from './pageLoad'
import homePage from './home'
import menuPage from './menu'
import contactPage from './contact'

pageLoader();
homePage();

let homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', homePage);

let menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', menuPage);

let contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', contactPage)