const primaryColors = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8F00FF'];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');


btn.addEventListener('click', function() {
    const randomNumber = randomize();
    document.body.style.backgroundColor = primaryColors[randomNumber];
    color.textContent = primaryColors[randomNumber];
});

function randomize() {
    return Math.floor(Math.random() * primaryColors.length);
}



