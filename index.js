let display = document.querySelectorAll('.display');
let num = document.querySelectorAll(".num");
let box = document.querySelectorAll('div.box');
let icon = document.querySelectorAll('i');
let btns = document.querySelectorAll('span');
let day = document.querySelector('.d');
let night = document.querySelector('.n');

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

