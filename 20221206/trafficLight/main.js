const lights = document.querySelectorAll('.light');
const colors = ['red', 'yellow', 'green'];
let i = 1;

const switchLight = () => {
    lights.forEach(light => light.classList = 'light');
    lights[i].classList.add(colors[i]);
    i++
    if (i >= colors.length) i = 0;
}

document.getElementById('switch').addEventListener('click', switchLight);