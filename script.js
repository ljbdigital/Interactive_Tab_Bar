let tabItem = document.querySelectorAll('.menuItem');
let menu = document.querySelector('.menu');
let circle = document.querySelector('.circle');
let circle2 = document.querySelector('.circle2');
let menuBorder = document.querySelector('.menu__border');
menuBorder.style.visibility = "hidden";
gsap.set('.circle2', {display: 'none'})
const handleClick = (item, i) => {
    let lastItem = document.querySelector('.active');
    if (lastItem === item) { 
        return 
    }
    else if (lastItem) {
        circle.style.display = "none";
        lastItem.classList.remove('active');
        item.classList.add('active');
        curve(lastItem, menuBorder)
    }
    circle.style.display = "none";
    item.classList.add('active');
    // circle2.style.display = "block";
    // circle2.style.transition = 'all 0.7s';
    // //circle2.style.left = Math.floor(offset.left - menu.offsetLeft - (menuBorder.offsetWidth  - offset.width) / 2) +  81 + "px";
    // circle2.style.transform = 'scale(1)';
    // circle2.style.top = -20;
    const offset = item.getBoundingClientRect();
    let x = Math.floor(offset.left - menu.offsetLeft - (menuBorder.offsetWidth  - offset.width) / 2) +  81 + "px";
    gsap.set('.circle2', {left: x, top: -40})
    gsap.fromTo('.circle2', {display: 'none', scale: 0}, {display: 'block', scale: 1, duration: 0.5, ease: 'easeOut'})
    menuBorder.style.visibility = "visible";
    curve(item, menuBorder)
    
}
const handleHover = (item, i) => {
    const offset = item.getBoundingClientRect();
    let x = Math.floor(offset.left - menu.offsetLeft - (menuBorder.offsetWidth  - offset.width) / 2) +  86 + "px";
    gsap.to('.circle', {display: 'block', left: x, duration: 0.4, ease: 'easeOut'})
}
const handleMouseout = (item) => {
    circle.style.display = "none";
}
const curve = (el, menuBorder) => {
    if (el) {
        const offsetActiveItem = el.getBoundingClientRect();
        const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
        menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
    }
}
tabItem.forEach((item, i) => {
    item.addEventListener('mouseover', () => handleHover(item, i))
    item.addEventListener('click', () => handleClick(item, i))
})
menu.addEventListener('mouseout', () => handleMouseout())
