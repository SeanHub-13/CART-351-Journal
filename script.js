"use strict";

const welcome = document.querySelector("#welcome");
const welcomeText = welcome.innerText;
const finished = document.querySelectorAll(".finished");
const unfinished = document.querySelectorAll(".unfinished");

document.addEventListener("DOMContentLoaded", () => {
    finished.forEach((el, i) => {
        el.style.animationDelay = `${0 + i * 0.25}s`;
        el.addEventListener("animationend", () => {
            el.style.opacity = "1";
            el.style.animation = "none";
        });
    });
    unfinished.forEach((el, i) => {
        el.style.animationDelay = `${0.5 + i * 0.25}s`;
    });

    setInterval(() => {
        finished.forEach((el) => {
            setTimeout(() => {
                if (Math.random() > 0.7) {
                    el.style.opacity = "0.8";
                    setTimeout(() => {
                        el.style.opacity = "1";
                    }, 150);
                }
            }, Math.random() * 10000);
        });
    }, 1000);

});
