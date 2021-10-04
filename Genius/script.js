let ordem = [];
let clickOrdem = [];
let pontos = 0;

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let shuffleOrder = () =>{
  let colorOrder = Math.floor(Math.random()*4)
  ordem[ordem.length] = colorOrder
  clickOrdem = [];
  for(let i in ordem) {
    let elementColor = createColorElement(ordem[i])
    lightColor(elementColor,Number(i) + 1)
  }
}

let lightColor = (element,number) =>{
  number = number * 500;
  setTimeout(()=>{
    element.classList.add('opacity')
  },number - 250)
  setTimeout(()=>{
    element.classList.remove('opacity')
  },number - 250)
}

let checkOrdem = () =>{
  for (let i in clickOrdem){
    if(clickOrdem[i] != ordem[i]){
      lose()
      break
    }
  }
  if(clickOrdem.length == ordem.length){
    alert(`Sua pontuação foi: ${pontos}\n Você acertou! Iniciando próximo nível!`)
    nextLevel();
  }
}

let click = (color) =>{
  clickOrdem[clickOrdem.length] = color;
  createColorElement(color).classList.add('opacity')
  setTimeout(()=>{
    createColorElement(color).classList.remove('opacity')
    checkOrdem();
  },250)

}

//1-red 2- green 3- blue 4- yellow

let createColorElement = (color) =>{
  if(color == 0){
    return red
  }else if(color == 1){
    return green
  }else if(color == 2){
    return blue
  }else if(color == 3){
    return yellow
  }
}

let nextLevel = () =>{
  pontos++;
  shuffleOrder()
}

let lose = () =>{
  alert(`Você perdeu D: \n Pontuação: ${pontos}\n Clique em ok para jogar novamente`);
  ordem = []
  clickOrdem = []
  playGame()
}

let playGame = () => {
  alert('Bem vindo ao Genius! Iniciando novo Jogo')
  pontos = 0
  
  nextLevel();
}
//1-red 2- green 3- blue 4- yellow
red.onclick = () => click(0)
green.onclick = () => click(1)
blue.onclick = () => click(2)
yellow.onclick = () => click(3)

playGame()