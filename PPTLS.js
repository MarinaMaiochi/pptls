let jogou = 0;

const matriz = [['e','g','p','g','p'],['p','e','g','p','g'],['g','p','e','g','p'],['p','g','p','e','g'],['g','p','g','p','e']] ;

function quemGanhou (){
  const jog = document.querySelector(`.jogador:not(.apagado)`).getAttribute("data-n");
  const pc = document.querySelector(`.computador:not(.apagado)`).getAttribute("data-n");
 
  console.info (jog + "x" + pc );
  resultado = matriz[pc][jog];
  console.info (resultado);

  if (resultado == 'e'){
    document.querySelector(`.empate`).classList.remove('some');

    const divEmpate = document.querySelector('.e');
    const divBranco = document.createElement('div');
    divBranco.classList.add('branco');
    divBranco.classList.add('bola');
    divEmpate.appendChild(divBranco);

  } else if (resultado == 'p'){
    document.querySelector(`.perdeu`).classList.remove('some');

    const divPerdeu = document.querySelector('.p');
    const divAzul = document.createElement('div');
    divAzul.classList.add('azul');
    divAzul.classList.add('bola');
    divPerdeu.appendChild(divAzul);

  } else if (resultado == 'g'){
    document.querySelector(`.ganhou`).classList.remove('some');

    const divGanhou = document.querySelector('.g');
    const divVerm = document.createElement('div');
    divVerm.classList.add('vermelho');
    divVerm.classList.add('bola');
    divGanhou.appendChild(divVerm);
  }
  setTimeout(novaPartida, 1000);
}

function jogadaPC (){
  let jogada = Math.floor(Math.random() * 5);
  const sorteado = document.querySelector(`.computador[data-n="${jogada}"]`);
  sorteado.classList.remove('apagado');
  quemGanhou();
}

function jogadaJogador(event){

  let escolhido = event.target;
  if (jogou == 0){
    escolhido.classList.remove('apagado');
    jogou++ ;
    console.info(jogou + 'é um?');
    jogadaPC();
  }
}

function novaPartida(){
  document.querySelector('.jogador:not(.apagado)').classList.add('apagado');
  document.querySelector('.computador:not(.apagado)').classList.add('apagado');
  jogou = 0;
  console.info(jogou + 'é zer0?');
  document.querySelector(`.perdeu`).classList.add('some');
  document.querySelector(`.ganhou`).classList.add('some');
  document.querySelector(`.empate`).classList.add('some');
}

// function enterNoMelhorDe (event){
//   if ( event.key == 'Enter') {
//     document.querySelector('.doInput').blur() ;
//     naMelhorDe ()
//   }
// }
// document.querySelector('.doInput').addEventListener('keydown', enterNoMelhorDe);

const clicado = document.querySelectorAll('.jogador');
for (i = 0 ; i <clicado.length ; i++){
   clicado[i].addEventListener('click', jogadaJogador);
}

// const inputQtddJogadas = document.querySelector('.doInput');
// let qtddJogadas = inputQtddJogadas.value;

// function naMelhorDe (){
//   while (qtddJogadas>0){
//     const clicado = document.querySelectorAll('.jogador');
//     for (i = 0 ; i <clicado.length ; i++){
//       clicado[i].addEventListener('click', jogadaJogador);
//     }

//     novaPartida();
//   }
// }
