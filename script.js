let iniciando =document.querySelector('#iniciando');
let menu =document.querySelector('#menu');
let carregando=document.querySelector('#carregando');
let candidatos =document.querySelector('#candidatos');
let encerrando =document.querySelector('#encerrando');
let tela =document.querySelector('.tela');
let informações =document.querySelector('#informações');
let propostas =document.querySelector('#menu-propostas');

let cand1 =document.querySelector('#cand1');
let cand2 =document.querySelector('#cand2');
let cand3 =document.querySelector('#cand3');
let cand4 =document.querySelector('#cand4');
let cand5 =document.querySelector('#cand5');
let cand6 =document.querySelector('#cand6');
//vareaveis de controle 
let votaçao =document.querySelector('.votação');
let botoesespeciais =document.querySelector('.especiais');
let numeros =document.querySelector('.numeros');
let votinfo =document.querySelector('.votinfo');
let partedecima1=document.querySelector('.partedecima1');
let partedecima2=document.querySelector('.partedecima2');


let ligado=false;
let estanomenu=false;
let menupropostas=false;
let candidatoproposta=false;
let modovotação=false;
let EtapaAtual= 0;
let numero = "";


function limpar(){
iniciando.style.display='none';
menu.style.display='none';
carregando.style.display='none';
candidatos.style.display='none';
encerrando.style.display='none';
informações.style.display='none';
propostas.style.display='none';
cand1.style.display='none';
cand2.style.display='none';
cand3.style.display='none';
cand4.style.display='none';
cand5.style.display='none';
cand6.style.display='none';
votaçao.style.display='none';
botoesespeciais.style.display='none';
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
        case 4 :
            Fvotaçao();
            break;
        case 5 :
            
            encerrar();
            break;
        default:
            break;
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
            modovotação=false;
            estanomenu=false;
            menupropostas=false;
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
            if(candidatoproposta==false){
                    menupropostas=false;
                    limpar();
                    modovotação=false;
                    carregando.style.display='block';
                    let pausa = setTimeout(function() {
                    limpar();
                    menu.style.display='block';
                    estanomenu=true;
                    
                    }, 1000)
            } 
            else{
                menupropostas=false;
                limpar();
                modovotação=false;
                carregando.style.display='block';
                let pausa = setTimeout(function() {
                limpar();
                propostas.style.display="block";
                menupropostas=true;
                candidatoproposta=false
                }, 1000)
            }
        } 
    }
}
function encerrar(){
    if(ligado==true){
        if(estanomenu==true){
            limpar();
            menupropostas=false;
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
            modovotação=false;
            estanomenu=false;
            menupropostas=false;
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
            modovotação=false;
            estanomenu=false;
            carregando.style.display='block';
            let pausa = setTimeout(function() {
            limpar();
            propostas.style.display='block';
            menupropostas=true;

        }, 1000)};
        
    }

}
function escolheu(m){
    if(menupropostas==true){
    switch (m) {
        
        case 1:
          limpar();
          menupropostas=false;
          candidatoproposta=true;
          carregando.style.display='block';
          let pausa = setTimeout(function() {
              limpar();
            cand1.style.display="block";

        }, 1000)
            break;
        case 2:
            limpar();
            menupropostas=false;
            candidatoproposta=true;
            carregando.style.display='block';
            let pausa2 = setTimeout(function() {
                limpar();
                cand2.style.display="block";
    
            }, 1000)
                break;
        case 3:
            limpar();
            menupropostas=false;
            candidatoproposta=true;
            carregando.style.display='block';
            let pausa3 = setTimeout(function() {
            limpar();
            cand3.style.display="block";
    
            }, 1000)
                break;
        case 4:
            limpar();
            menupropostas=false;
            candidatoproposta=true;
            carregando.style.display='block';
            let pausa4 = setTimeout(function() {
            limpar();
            cand4.style.display="block";
    
            }, 1000)
                break;
        case 5:
            limpar();
            menupropostas=false;
            candidatoproposta=true;
            carregando.style.display='block';
            let pausa5 = setTimeout(function() {
            limpar();
            cand5.style.display="block";
    
            }, 1000)
                break;
        case 6:
            limpar();
            menupropostas=false;
            candidatoproposta=true;
            carregando.style.display='block';
            let pausa6 = setTimeout(function() {
            limpar();
            cand6.style.display="block";
    
            }, 1000)
                break;
          
        default:
           
            break;
    }
  }
}
function Fvotaçao(){
    if(ligado==true){
        if(estanomenu==true){
            limpar();
            estanomenu=false;
            menupropostas=false;
            carregando.style.display='block';
            votou();
            let pausa = setTimeout(function() {
            limpar();
            modovotação=true;
            ComeçarEtapa();
            

        }, 1000)}
    }

}
function votou(v){
            
            if(modovotação==true){
              
                console.log('clicou em '+v);
               let numeropiscando= document.querySelector('.numero.pisca');
               if(numeropiscando !== null){
                   numeropiscando.innerHTML = v;
                   numero = `${numero}${v}`;
                   numeropiscando.classList.remove('pisca');
                    if(numeropiscando.nextElementSibling!==null){ 
                         numeropiscando.nextElementSibling.classList.add('pisca');
                    } else{
                        AtualizaInterface();
                    }

               }
        } 
        else{
            console.log('modo votação: desligado');
           
        }
}
function ComeçarEtapa(){
    let etapa=etapas[EtapaAtual];
    let numeroHTML='';

    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHTML +='<div class="numero pisca"></div>';
        }
        else{
        numeroHTML +='<div class="numero"></div>';
        }
}

    votinfo.innerHTML= etapa.titulo;
    numeros.innerHTML= numeroHTML;
    
    votaçao.style.display='flex';
    partedecima1.style.display='flex';
    partedecima2.style.display='block';
    botoesespeciais.style.display='block';
}
function AtualizaInterface(){
        alert("finalizou o voto");    
}