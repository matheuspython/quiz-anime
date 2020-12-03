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
listaImagemCounter = 0
listaImagem = ['/rasengan-image.jpg', '/rasengan-image2.jpg', '/luffy.jpg', 'luffy1.jpg']


listaPerguntas = ['rasengan', 'chidori', 'chapeu de palha', 'menino louco']

perguntasP = ['qual o nome desse jutsu?', 'qual o apelido do luffy?']
listaPCounter = 0

function clique(argumento) {
    if (listaPCounter == 2) {
        alert('parabens')
        return
    }
    if (argumento == 0) {

        mudaP(perguntasP[listaPCounter])
        img1.src = listaImagem[listaImagemCounter]
        img2.src = listaImagem[listaImagemCounter + 1]
        remove()
        perguntas(listaPerguntas[listaImagemCounter], listaPerguntas[listaImagemCounter + 1])

    }




    if (argumento == 1) {
        alert('errou')
    }
    listaPCounter++
    listaImagemCounter += 2
}


perguntas('goku e vegeta?', 'naruto e sasuke')