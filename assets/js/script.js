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
    var allP = document.querySelectorAll('p');
    var allA = document.querySelectorAll('a');
    allP.forEach(function(element) {
      var currentSize = parseFloat(window.getComputedStyle(element).fontSize);
      var newSize = currentSize + 2;
      element.style.fontSize = newSize + "px";
    });
    allA.forEach(function(element) {
        var currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        var newSize = currentSize + 2;
        element.style.fontSize = newSize + "px";
      });
  }
  function changeFontSizeDown() {
    var allP = document.querySelectorAll('p');
    var allA = document.querySelectorAll('a');
    var allH1 = document.querySelectorAll('h1');
    allP.forEach(function(element) {
      var currentSize = parseFloat(window.getComputedStyle(element).fontSize);
      var newSize = currentSize - 2;
      element.style.fontSize = newSize + "px";
    });
    allA.forEach(function(element) {
        var currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        var newSize = currentSize - 2;
        element.style.fontSize = newSize + "px";
      });
    allH1.forEach(function(element) {
        var currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        var newSize = currentSize - 2;
        element.style.fontSize = newSize + "px";
      });  
  }
    