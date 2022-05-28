
const criarDiv = (texto)=>{
    const div = document.createElement('div')
    div.textContent = texto
    div.classList.add('key')
    div.id = texto
    document.getElementById('container').appendChild(div)
}

const sons = {
    'A':'boom.wav',
    'S':'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

for(const som in sons) {
    criarDiv(som)       
}

const tocarSom = som =>{
  const novoSom = new Audio(`./assets/sounds/${som}`)
  novoSom.play()
}

document.addEventListener('click',e=>{
 const elemento = e.target
 if(elemento.classList.contains('key')){
     tocarSom(sons[elemento.textContent])
     console.log(sons[elemento.textContent])
 }
 return
})

