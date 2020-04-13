function quemGanhou (){
  const jog = document.querySelector(`.jogador:not(.apagado)`);
  const pc = document.querySelector(`.computador:not(.apagado)`);


  
}

function jogadaPC (){
  let jogada = Math.floor(Math.random() * 5);
  const sorteado = document.querySelector(`.computador[data-n="${jogada}"]`);
  sorteado.classList.remove('apagado');
}

function jogadaJogador(event){
  const escolhido = event.target;
  escolhido.classList.remove('apagado');
  jogadaPC();
}


const clicado = document.querySelectorAll('.jogador');
for (i = 0 ; i <clicado.length ; i++){
    clicado[i].addEventListener('click', jogadaJogador);
}
