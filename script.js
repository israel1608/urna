let iniciando =document.querySelector('#iniciando');
let menu =document.querySelector('#menu');
let carregando=document.querySelector('#carregando');
let candidatos =document.querySelector('#candidatos');
let encerrando =document.querySelector('#encerrando');

function limpar(){
iniciando.style.display='none';
menu.style.display='none';
carregando.style.display='none';
candidatos.style.display='none';
encerrando.style.display='none';

}

function ligar(){
    limpar();
    iniciando.style.display='block';
    let pausa = setTimeout(function() {
    limpar();
    menu.style.display='block';
    
      }, 2000)
}
function Fcandidatos(){
    limpar();
    menu.style.display='none';
    carregando.style.display='block';
    let pausa = setTimeout(function() {
    limpar();
    candidatos.style.display='block';

}, 2000)
}
function voltar(){
    limpar();
    carregando.style.display='block';
    let pausa = setTimeout(function() {
    limpar();
    menu.style.display='block';
    
      }, 1500)
}
function encerrar(){
    limpar();
    encerrando.style.display='block';
    let pausa = setTimeout(function() {
    limpar();

      }, 3000)
}
