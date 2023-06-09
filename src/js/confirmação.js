const form = document.querySelector('#formulario');
const campos = document.querySelectorAll('.campo');
const span = document.querySelectorAll('#alerta-nome');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const telRegex = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
/^(\d{2})(\d{1})(\d{4})(\d{4})/
"$1.$2.$3-$4"

form.addEventListener('submit', event => {
    event.preventDefault();
    validarNome()
    validarEmail()
    validarTelefone()
    validarMensagem()
})

function erro(index){
    campos[index].classList.remove('permitido')
    campos[index].classList.add('negado')
    span[index].style.display = 'block'
}

function acerto(index){
    campos[index].classList.add('permitido')
    span[index].style.display = 'none'
}

function validarNome(){
    if(campos[0].value.length < 1){
        erro(0)
    }else{
        acerto(0)
    }
}

function validarEmail(){
    if(!emailRegex.test(campos[1].value)){
        erro(1)
    }else{
        acerto(1)
    }
}

function validarTelefone(){
    if(!telRegex.test(campos[2].value)){
        erro(2)
    }else{
        acerto(2)
    }
}

function validarMensagem(){
    if(campos[3].value.length < 1){
        erro(3)
    }else{
        acerto(3)
    }
}

/^(\d{2})(\d{1})(\d{4})(\d{4})/
"$1.$2.$3-$4"