//Task 4
"use strict";

const blockElement = document.querySelectorAll(".block"); //Getting all div`s.

const getRandomNumber = () => Math.floor(Math.random() * 256); //Getting number in range 0 to 255.

const getRandomRgb = () => `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`; //Getting rgb string ready-to-use.

const changeBackgroundColor = (element) => { //Setting new background color on click.
    element.style.backgroundColor = getRandomRgb();
}

blockElement.forEach(element => { //Listening "onClick".
    element.addEventListener('click', (e) => changeBackgroundColor(e.target));
});

