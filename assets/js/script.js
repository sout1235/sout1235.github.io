let switchMode = document.getElementById("switchMode");
let theme = document.getElementById("theme");
const savedTheme = localStorage.getItem('theme'); 
if (savedTheme) { 
    theme.href = savedTheme; 
} 
switchMode.onclick = function(){
    if(theme.getAttribute("href") == "assets/css/web.css"){
        theme.href = "assets/css/secondVar.css";
    }
    else{
        theme.href = "assets/css/web.css";
    }
    localStorage.setItem('theme', theme.href); 
}

window.onload = function(){
    let preloader = document.getElementById ('preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function() {
        preloader.classList.add('preloader-hidden');
    },950)
}

function changeFontSizeUp() {
  // Получаем все элементы без указания классов
  var allP = document.querySelectorAll('p');
  var allA = document.querySelectorAll('a');
  var allLi = document.querySelectorAll('.header__menu li');
  // Устанавливаем новый размер текста и уменьшаем margin для каждого элемента
  allP.forEach(changeSizeAndMargin(2));
  allA.forEach(changeSizeAndMargin(2));
  allLi.forEach(changeMargin(-2)); // Уменьшаем margin для элементов списка меню
}

function changeFontSizeDown() {
  // Получаем все элементы без указания классов
  var allP = document.querySelectorAll('p');
  var allA = document.querySelectorAll('a');
  var allLi = document.querySelectorAll('.header__menu li');
  // Устанавливаем новый размер текста и увеличиваем margin для каждого элемента
  allP.forEach(changeSizeAndMargin(-2));
  allA.forEach(changeSizeAndMargin(-2));
  allLi.forEach(changeMargin(2)); // Увеличиваем margin для элементов списка меню
}

// Вспомогательная функция для изменения размера шрифта и margin
function changeSizeAndMargin(delta) {
  return function(element) {
      var currentSize = parseFloat(window.getComputedStyle(element).fontSize);
      var newSize = currentSize + delta;
      element.style.fontSize = newSize + "px";
      
      // Добавляем изменение margin для элементов 'p' и 'a'
      var currentMargin = parseFloat(window.getComputedStyle(element).marginRight);
      var newMargin = currentMargin - delta; // Обратите внимание на знак минус для уменьшения margin
      element.style.marginRight = newMargin + "px";
  };
}

// Вспомогательная функция для изменения margin
function changeMargin(delta) {
  return function(element) {
      var currentMargin = parseFloat(window.getComputedStyle(element).marginRight);
      var newMargin = currentMargin + delta;
      element.style.marginRight = newMargin + "px";
  };
}  
