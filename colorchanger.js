const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    let hex = '#';

    for (let i = 0; i < 6; i++) {
        hex += colors[randomize()];
    }

    color.textContent = hex;
    color.style.color = hex;
    document.body.style.backgroundColor = hex;

});

const randomize = () => {
    return Math.floor(Math.random() * colors.length);
}



