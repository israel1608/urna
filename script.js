let iniciando =document.querySelector('#iniciando');
let menu =document.querySelector('#menu');
let carregando=document.querySelector('#carregando');
let candidatos =document.querySelector('#candidatos');
let encerrando =document.querySelector('#encerrando');
let tela =document.querySelector('.tela')
let ligado=false;
let estanomenu=false;

function limpar(){
iniciando.style.display='none';
menu.style.display='none';
carregando.style.display='none';
candidatos.style.display='none';
encerrando.style.display='none';

}

function ligar(){
    if(ligado==false){
    ligado=true;
    limpar();
    tela.classList.add('ligado');
    iniciando.style.display='block';
    let pausa = setTimeout(function() {
    limpar();
    menu.style.display='block';
    estanomenu=true;
    
      }, 1000)}
}
function Fcandidatos(){
    if(ligado==true){
        if(estanomenu==true){
            limpar();
            estanomenu=false;
            menu.style.display='none';
            carregando.style.display='block';
            let pausa = setTimeout(function() {
            limpar();
            candidatos.style.display='block';

        }, 1000)}
    }

}
function voltar(){
    if(ligado==true){
        if(estanomenu==false){

        limpar();
        carregando.style.display='block';
        let pausa = setTimeout(function() {
        limpar();
        menu.style.display='block';
        estanomenu=true;
        
        }, 1000)} 
    }
}
function encerrar(){
    if(ligado==true){
        if(estanomenu==true){
            limpar();
            estanomenu=false
            ligado=false;
            encerrando.style.display='block';
            let pausa = setTimeout(function() {
            limpar();
            tela.classList.remove('ligado');

            }, 2000)}
         }
}
