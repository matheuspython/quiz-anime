var pergunta = document.querySelector("#pergunta")
var img1 = document.querySelector("img#img1")
var img2 = document.querySelector("img#img2")
var lista = document.querySelector('ul')
img1.src = '/goku-image.jpg'
img2.src = '/vegeta-image.jpg'



function mudaP(perguntaa) {
    pergunta.textContent = '' + perguntaa
}

mudaP("qual o nome dos dois perssonagens")

function perguntas(pergunta, pergunta2) {
    var pergunta1 = document.createElement('li')
    var TextoPergunta1 = document.createTextNode(pergunta)
    pergunta1.setAttribute('resposta', 'sim')
    pergunta1.setAttribute('onclick', 'clique(' + 0 + ')')
    pergunta1.appendChild(TextoPergunta1)

    var perguntaa2 = document.createElement('li')
    var TextoPergunta2 = document.createTextNode(pergunta2)
    perguntaa2.setAttribute('resposta', 'nao')
    perguntaa2.setAttribute('onclick', 'clique(' + 1 + ')')
    perguntaa2.appendChild(TextoPergunta2)

    lista.appendChild(pergunta1)
    lista.appendChild(perguntaa2)

}

function remove() {
    var removedor = document.querySelectorAll('li')
    lista.removeChild(removedor[0])
    lista.removeChild(removedor[1])
}

function clique(argumento) {

    if (argumento == 0) {

        mudaP('qual o nome desse jutsu')
        img1.src = '/rasengan-image.jpg'
        img2.src = '/rasengan-image2.jpg'
        remove()
        perguntas('rasengan', 'chidori')

    }




    if (argumento == 1) {
        alert('errou')
    }
}


perguntas('goku e vegeta?', 'naruto e sasuke')