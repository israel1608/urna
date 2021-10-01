let iniciando =document.querySelector('#iniciando');
let menu =document.querySelector('#menu');
let carregando=document.querySelector('#carregando');
let candidatos =document.querySelector('#candidatos');
let encerrando =document.querySelector('#encerrando');
let tela =document.querySelector('.tela');
let informações =document.querySelector('#informações');
let propostas =document.querySelector('#propostas')
let ligado=false;
let estanomenu=false;

function limpar(){
iniciando.style.display='none';
menu.style.display='none';
carregando.style.display='none';
candidatos.style.display='none';
encerrando.style.display='none';
informações.style.display='none';
propostas.style.display='none';
}

function clicou(n){
    switch(n){
        case 9 :
         ligar();
        break;
        case 1 :
            Fcandidatos();
            break;
        case 0 :
            voltar();
            break;
        case 2 :
            Finformações();
            break;
        case 3 :
            Fpropostas();
            break;
        case 5 :
            encerrar();
            break;
        default:
            console.log("errou !");
    }
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
function Finformações(){
    if(ligado==true){
        if(estanomenu==true){
            limpar();
            estanomenu=false;
            menu.style.display='none';
            carregando.style.display='block';
            let pausa = setTimeout(function() {
            limpar();
            informações.style.display='block';

        }, 1000)}
    }

}
function Fpropostas(){
    if(ligado==true){
        if(estanomenu==true){
            limpar();
            estanomenu=false;
            carregando.style.display='block';
            let pausa = setTimeout(function() {
            limpar();
            propostas.style.display='block';

        }, 1000)}
    }

}