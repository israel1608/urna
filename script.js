//VAREAVEIS DE CONTROLE TELA 
let iniciando = document.querySelector('#iniciando');
let menu = document.querySelector('#menu');
let carregando = document.querySelector('#carregando');
let candidatos = document.querySelector('#candidatos');
let encerrando = document.querySelector('#encerrando');
let tela = document.querySelector('.tela');
let informações = document.querySelector('#informações');

//controle de tela PROPOSTAS
let propostas = document.querySelector('#menu-propostas');
let cand1 = document.querySelector('#cand1');
let cand2 = document.querySelector('#cand2');
let cand3 = document.querySelector('#cand3');
let cand4 = document.querySelector('#cand4');
let cand5 = document.querySelector('#cand5');
let cand6 = document.querySelector('#cand6');
//controle de tela VOTAÇÃO
let votaçao = document.querySelector('.votação');
let botoesespeciais = document.querySelector('.especiais');
let numeros = document.querySelector('.numeros');
let votinfo = document.querySelector('.votinfo');
let partedecima1 = document.querySelector('.partedecima1');
let partedecima2 = document.querySelector('.partedecima2');
let descrição = document.querySelector('.descrição');
let imgvoto = document.querySelector('.imgvoto');
let fimvotaçao = document.querySelector('.fimvotaçao');
let resultativo = document.querySelector('.resultativo');
let resultadovotaçao = document.querySelector('.resultado-votaçao');
let caixa = document.querySelector('.caixa');

//VAREAVEIS DE APOIO
let ligado = false;
let estanomenu = false;
let menupropostas = false;
let candidatoproposta = false;
let modovotação=  false;
let EtapaAtual = 0;
let numero = "";
let branco = false;


// FUNÇÃO DE LIMPAR TELA
function limpar(){
iniciando.style.display = 'none';
menu.style.display = 'none';
carregando.style.display = 'none';
candidatos.style.display = 'none';
encerrando.style.display = 'none';
informações.style.display = 'none';
propostas.style.display = 'none';
cand1.style.display = 'none';
cand2.style.display = 'none';
cand3.style.display = 'none';
cand4.style.display = 'none';
cand5.style.display = 'none';
cand6.style.display = 'none';
votaçao.style.display = 'none';
botoesespeciais.style.display = 'none';
fimvotaçao.style.display = 'none';
}
// MENU
function clicou(n){
    switch(n){
        case 11 :
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
// FUNÇOES DO MENU
function ligar(){
    if(ligado==false){
    ligado=true;
    modovotação=false;
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
                    modovotação=false;
                    EtapaAtual=0;
                    limpar();
                    carregando.style.display='block';
                    let pausa = setTimeout(function() {
                    limpar();
                    menu.style.display='block';
                    estanomenu=true;
                    numero = '';
                    descrição.innerHTML = '';
                    imgvoto.innerHTML = '';

                    }, 500)
            } 
            else{
                menupropostas=false;
                modovotação=false;
                EtapaAtual=0;
                limpar();
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
// SUB MENU DE PROPOSTAS
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
// ÁREA DE VOTAÇÃO
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
            

        }, 500)}
    }

}
function votou(v){
            
            if(modovotação==true){
              
               
               let numeropiscando= document.querySelector('.numero.pisca');
               if(numeropiscando !== null){
                   numeropiscando.innerHTML = v;
                   numero = `${numero}${v}`;
                   numeropiscando.classList.remove('pisca');
                    if(numeropiscando.nextElementSibling !== null){ 
                         numeropiscando.nextElementSibling.classList.add('pisca');
                    } else{
                        AtualizaInterface();
                    }

               }
        } 
}
function ComeçarEtapa(){
    let etapa = etapas[EtapaAtual];
    let numeroHTML='';
    branco = false;
    numero = '';
    descrição.innerHTML = '';
    imgvoto.innerHTML = '';

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
            let etapa = etapas[EtapaAtual];
            let candidato = etapa.candidatos.filter((item)=>{
            if(item.numero === numero){
                return true;
            } else{
                return false;
            }
        });
    if(candidato.length > 0){
        candidato = candidato[0];
            if(candidato.vice === ''){
            descrição.innerHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}`;
            } else{descrição.innerHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}<br/>Vice: ${candidato.vice}`;}

        let fotosHTML = '';
            for(let i in candidato.fotos){
                fotosHTML+= `<div class="imgvoto"><div>${candidato.fotos[i].legenda}</div><img src="imagens/${candidato.fotos[i].url}" alt="">`;
            };

        imgvoto.innerHTML = fotosHTML;
    } else{
        descrição.innerHTML = "Voto nulo";
    }
}
// Botoes--especiais 
function reset(){
        if(ligado==true){
                if( modovotação==true){
            ComeçarEtapa();
        }
    }
}
function BRANCO(){
    if(ligado==true){
            if( modovotação==true){
                if(numero === ''){
                branco = true;
                numeros.innerHTML='***';
                descrição.innerHTML = "Voto em BRANCO";
            }
        }
    }
}
function confirmar(){
        if(ligado==true){
            if( modovotação==true){
                let etapa = etapas[EtapaAtual];// analise se o voto foi nulo ou nao
                let votoConfirmado = false;
                let candidato = etapa.candidatos.filter((item)=>{
                if(item.numero === numero){
                    return true;
                } else{
                    return false;
                }
            });
            if(branco === true){ //analise se o voto foi em branco
                votoConfirmado = true;
                console.log('Confirmando como BRANCO');
                let resultativo = document.querySelector('.resultativo.ativo')    
                if(resultativo !== null){
                    resultativo.innerHTML = 'Votou em BRANCO';
                    
                    resultativo.classList.remove('ativo');
                } 
                if(resultativo.nextElementSibling!==null){ 
                    resultativo.nextElementSibling.classList.add('ativo');
                        }

            } else if(numero.length === etapa.numeros){ 
                    if(candidato.length === 0){//confere se o numero confirmado não bate com nenhum candidato
                            votoConfirmado = true;
                            console.log('Confirmado como voto NULO');
                                let resultativo = document.querySelector('.resultativo.ativo')    
                            if(resultativo !== null){
                                resultativo.innerHTML = 'Votou NULO';
                                
                                resultativo.classList.remove('ativo');
                            } 
                            if(resultativo.nextElementSibling!==null){ 
                                resultativo.nextElementSibling.classList.add('ativo');
                                    } else{
                                        alert('numero máximo de votos atingido, confira o Resultado ');
                                      }
                            
                } else { //caso o numero combine com algum candidato
                        votoConfirmado = true;
                         console.log('Confirmado como '+numero);
                         let resultativo = document.querySelector('.resultativo.ativo')    
                       if(resultativo !== null){
                        resultativo.innerHTML = `Votou ${numero}`;
                        
                        resultativo.classList.remove('ativo');
                         } 
                      if(resultativo.nextElementSibling!==null){ 
                        resultativo.nextElementSibling.classList.add('ativo');
                            } else{
                                alert('numero máximo de votos atingido, confira o Resultado ');
                         }
                    }
                }
                  
                  
                if(votoConfirmado){
                    EtapaAtual++;
                    if(etapas[EtapaAtual] !== undefined){
                        ComeçarEtapa();
                             } 
                    else {
                        limpar();
                        console.log('Fim da votação');
                        // salva os resultado inicio
                        let resultativo = document.querySelector('.resultativo.ativo')    
                        if(resultativo !== null){
                            resultativo.innerHTML = '--------';
                            resultativo.classList.remove('ativo');
                        } 
                        if(resultativo.nextElementSibling!==null){ 
                            resultativo.nextElementSibling.classList.add('ativo');
                         } else{
                                 alert('numero máximo de votos atingido, confira o Resultado ');
                                }
                          // salva os resultados fim     
                        fimvotaçao.style.display='block';
                    }
                }
            }
        }
}
//botao de mostrar o resultado
function mostrarresult (){
    resultadovotaçao.style.height="auto";
    caixa.style.display='block';
}