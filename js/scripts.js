/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function() {
    fetch('./pages/home.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('mainContent').innerHTML = data;
              updateActiveMenu('aHome');
          })
          .catch(error => console.error(error));
});

function goToPage(page) {
    fetch(`./pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('mainContent').innerHTML = data;
            updateActiveMenu(`a${page.charAt(0).toUpperCase() + page.slice(1)}`);
        })
        .catch(error => console.error(error));
}

function updateActiveMenu(idMenu) {
    let elements = document.querySelectorAll('a.active');
    elements.forEach(function(element) {
        element.classList.remove('active');
    });
    let current = document.getElementById(idMenu);
    current.classList.add('active');
}