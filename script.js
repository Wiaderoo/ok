    //menu function

let menu_container = document.querySelector(`.menu_container`);
let first_bar = document.querySelector(`#menu_container_burger div:nth-child(1)`);
let second_bar = document.querySelector(`#menu_container_burger div:nth-child(2)`);
let third_bar = document.querySelector(`#menu_container_burger div:nth-child(3)`);

function menu_function(){
    menu_container.classList.toggle("menu_container_visible");
    first_bar.classList.toggle("burger_line1");
    second_bar.classList.toggle("burger_line2");
    third_bar.classList.toggle("burger_line3");
}
