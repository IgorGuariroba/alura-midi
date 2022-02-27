const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    const som = `#som_${buttons[i].classList[1]}`;
    buttons[i].onclick = () => { tocarSom(som)};
}

function tocarSom(audioElementId){
    document.querySelector(audioElementId).play();
}


