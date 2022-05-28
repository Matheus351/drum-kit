const criarDiv = (texto)=>{
    const div = document.createElement('div')
    div.textContent = texto
    div.classList.add('key')
    div.id = texto
    document.getElementById('container').appendChild(div)
}
