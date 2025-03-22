let display = document.querySelectorAll('.display');
let num = document.querySelectorAll(".num");
let box = document.querySelectorAll('div.box');
let icon = document.querySelectorAll(".fa-repeat");
let btns = document.querySelectorAll('span');
let day = document.querySelector('.d');
let night = document.querySelector('.n');
let arrow = document.querySelector('.top');

for (let i = 0; i < display.length; i++){
    display[i].onclick = function () {
        num[i].innerText =+num[i].innerText + 1;
    }
    icon[i].onclick = function () {
        num[i].innerText = 0;
    }
}

if (day.classList.contains("active")) {
    box.forEach(function (e) {
        if (e.classList.contains("night")) {
            e.style.display = "none";
        } else {
            e.style.display = "block";
        }
})
}
else {
    box.forEach(function (e) {
        if (e.classList.contains("day")) {
            e.style.display = "none";
        }
        else {
            e.style.display = "block";
        }
})
}

btns.forEach(function (e) {
    e.onclick = function () {
        btns.forEach(function (e) {
            e.classList.remove('active');
        })
        e.classList.add('active');

        if (day.classList.contains('active')) {
            box.forEach(function (e) {
                if (e.classList.contains('night')) {
                    e.style.display = 'none';
                }
                else {
                    e.style.display = 'block';
                }
            })
        }
        else {
            box.forEach(function (e) {
                if (e.classList.contains("day")) {
                    e.style.display = "none";
                }
                else {
                    e.style.display = "block";
                }
            });
        }
    }
})

document.body.onscroll = function () {
    if (window.scrollY > 200) {
        arrow.style.opacity = '1';
    }
    else {
        arrow.style.opacity = "0";
    }
}

arrow.onclick = function () {
    window.scroll({ right: 0, top: 0, behavior: "smooth" } );
}