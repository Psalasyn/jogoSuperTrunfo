var mulherMaravilha = {
    nome: "Mulher Maravilha",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Mulher-Maravilha.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 95
    }
}

var batman = {
    nome: "Batman",
    imagem: "https://cdn.mensagenscomamor.com/content/images/p000002901.jpg?v=0&w=400&h=225&c=1",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var superMan = {
    nome: "Super Man",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/b/be/Super-Homem.jpg",
    atributos: {
        ataque: 100,
        defesa: 98,
        magia: 95
    }
}

var aquaMan = {
    nome: "Aquaman",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Aquaman.jpg/300px-Aquaman.jpg",
    atributos: {
        ataque: 84,
        defesa: 70,
        magia: 81
    }
}

var flash = {
    nome: "Flash",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a4/Barry_Allen_Flash.jpg",
    atributos: {
        ataque: 79,
        defesa: 86,
        magia: 89
    }
}

var lanternaVerde = {
    nome: "Lanterna Verde",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/83/Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg/300px-Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg",
    atributos: {
        ataque: 72,
        defesa: 85,
        magia: 60
    }
}

var coringa = {
    nome: "Coringa",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/1a/Joker_%28DC_Comics%29.jpg",
    atributos: {
        ataque: 73,
        defesa: 70,
        magia: 80
    }
}

var lexLuthor = {
    nome: "Lex Luthor",
    imagem: "http://vacanerd.com.br/wp-content/uploads/2014/03/3599328-1297543-actioncomics_luthor177cc3b.jpg",
    atributos: {
        ataque: 76,
        defesa: 63,
        magia: 87
    }
}

var gorilaGrodd = {
    nome: "Gorila Grodd",
    imagem: "https://upload.wikimedia.org/wikipedia/en/1/16/Gorilla_Grodd_%28circa_2013%29.png",
    atributos: {
        ataque: 98,
        defesa: 80,
        magia: 50
    }
}

var cyborg = {
    nome: "Cyborg",
    imagem: "https://i.pinimg.com/originals/8f/86/fd/8f86fd3afaa8081f9766ee8bfd7b259e.jpg",
    atributos: {
        ataque: 75,
        defesa: 92,
        magia: 83
    }
}

var cartaMaquina
var cartaJogador
var cartas = [mulherMaravilha, batman, superMan, aquaMan, flash, lanternaVerde, coringa, lexLuthor, gorilaGrodd, cyborg]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById("placar")
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if(cartas.length == 0) {
      alert("Fim de jogo")
      if(pontosJogador > pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      } else if(pontosJogador < pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
      
    }
    
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta" </div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}