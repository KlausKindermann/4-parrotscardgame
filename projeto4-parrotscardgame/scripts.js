let cartaUm = `
  <div class="carta um">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/bobrossparrot.gif"></div>
  </div> `;
const duplaUm=(cartaUm + cartaUm);
  
let cartaDois=  `
  <div class="carta dois">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/explodyparrot.gif"></div>
  </div> `;
const duplaDois=( duplaUm + cartaDois + cartaDois);
  
let cartaTres=  `
  <div class="carta tres">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/fiestaparrot.gif"></div>
  </div> `;
const duplaTres=(duplaDois + cartaTres + cartaTres);
  
let cartaQuatro=  `
  <div class="carta tres">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/metalparrot.gif"></div>
  </div> `;
  const duplaQuatro=(duplaTres + cartaQuatro + cartaQuatro);
  
let cartaCinco=  `
  <div class="carta cinco">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/revertitparrot.gif"></div>
  </div> `;
const duplaCinco=(duplaQuatro + cartaCinco + cartaCinco);
  
let cartaSeis=  `
  <div class="carta seis">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/tripletsparrot.gif"></div>
  </div> `;
const duplaSeis=(duplaCinco + cartaSeis + cartaSeis);
  
let cartaSete=  `
  <div class="carta sete">
    <div class="face atras"><img class="traseira" src="imagens/front 1.png"></div>
    <div class="face frente"><img class="frontal" src="imagens/unicornparrot.gif"></div>
  </div> `;
const duplaSete=(duplaSeis + cartaSete + cartaSete);

const lista = document.querySelector('.corpo');
lista.innerHTML ;
let qntdCartas ;
let qtdCartas=[cartaUm,cartaUm,cartaDois,cartaDois,cartaTres,cartaTres,cartaQuatro,cartaQuatro,cartaCinco,cartaCinco,cartaSeis,cartaSeis,cartaSete,cartaSete]
let cartasEscolhidas=[];

function perguntarCartas () {
const numeroDeCartas= prompt("Com quantas cartas você vai jogar? Apenas Valores pares de 4 a 14.");

if (numeroDeCartas == 4) {
    lista.innerHTML = lista.innerHTML + duplaDois;
}
else if (numeroDeCartas == 6) {
    lista.innerHTML = lista.innerHTML + duplaTres;
}
else if (numeroDeCartas == 8) {
    lista.innerHTML = lista.innerHTML + duplaQuatro
}
else if (numeroDeCartas == 10) {
    lista.innerHTML = lista.innerHTML + duplaCinco
}
else if (numeroDeCartas == 12) {
    lista.innerHTML = lista.innerHTML + duplaSeis
}
else if (numeroDeCartas == 14) {
    lista.innerHTML = lista.innerHTML + duplaSete
}
else { perguntarCartas ()
}
qntdCartas= numeroDeCartas;

}
perguntarCartas();

function contarCartas(){
for (let i=0; i<qntdCartas ; i++) {
cartasEscolhidas.push(qtdCartas[i]);
}
cartasEscolhidas.sort(comparador);
}
contarCartas();
console.log(cartasEscolhidas);


function comparador() { 
	return Math.random() - 0.5; 
}

//nao consegui fazer a cartas serem criadas misturadas, acho que foi pela estrutura anterior que eu fiz, 
//a array era misturada depois das cartas ja terem sido criadas, 
//acabei ficando perdido com o resto por causa disso.