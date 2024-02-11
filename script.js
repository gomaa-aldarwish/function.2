const header = document.querySelector("header");
window.addEventListener("scroll",function(){
header.classlist.toggle("sticky",window.scrollY>120);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = ()=>{
    menu.classlist.toggle('bx-x');
    navlist.classlist.toggle('active');
 
}
window.onscroll = ()=>{
    menu.classlist.remove('bx-x');
    navlist.classlist.remove('active');
 
}