const btnMobile = document.querySelector('[data-js="button"]');
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.querySelector('[data-js="menu"]');
    menu.classList.toggle('active');
}


 