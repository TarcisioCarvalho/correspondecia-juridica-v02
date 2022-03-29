const btnMobile = document.querySelector('[data-js="button"]');
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.querySelector('[data-js="menu"]');
    const nav = document.querySelector('[data-js="nav"]');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}


 