const buttons = document.querySelectorAll('.numero');
const tel = document.querySelector('#telefone');
const limpar = document.querySelector('#limpar');
limpar.onclick = Limpar;

for (let i = 0; i < buttons.length; i++) {
   buttons[i].onclick = addNumero;
}

function addNumero() {
    tel.value = tel.value.toString() + this.value.toString();
}

function Limpar(){
    tel.value = '';
}