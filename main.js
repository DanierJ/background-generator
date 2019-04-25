const inputs = document.querySelectorAll('.color'),
      p = document.querySelector('.current-bg');

inputs.forEach((input) => {
    input.addEventListener('input', changeColour);
});

function changeColour() {
    document.body.style.backgroundImage = 'linear-gradient(to right, '+ inputs[0].value + ',' +inputs[1].value+ ')';
    p.textContent = document.body.style.backgroundImage + ';';
}


