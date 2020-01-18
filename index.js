function sortedWord() {
    var btns = document.querySelectorAll('.btn');
    var words = ["SUBLIME", "DEBOCHE", "ASPECTO", "ALEGRIA", "LUGARES", "EMOTIVO", "CORAGEM", "ORGULHO", "CULTURA", "FAMOSOS"]
    var wordSorted = []
    var arrayLetter = []
    var word = []

    var max = words.length;
    var min = 0;
    var sorted = Math.floor(Math.random() * max) + min;

    wordSorted.push(words[sorted])

    var erro = 0

    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            
            var letter = btn.id

            var index = wordSorted[0].indexOf(letter)

            if (index == -1) {
                document.querySelector(".dontLetter").innerHTML = `não tem a letra ${letter}!`
                erro ++
            }

            if (erro == 1) {
                document.querySelector(".head").style.display = "block"
            }
            if (erro == 2) {
                document.querySelector(".body").style.display = "block"
                document.querySelector(".body2").style.display = "block"
                
            }
            if (erro == 3) {
                document.querySelector(".arm1").style.display = "block"
                document.querySelector(".hand1").style.display = "block"
            }
            if (erro == 4) {
                document.querySelector(".arm2").style.display = "block"
                document.querySelector(".hand2").style.display = "block"
            }
            if (erro == 5) {
                document.querySelector(".leg1").style.display = "block"
                document.querySelector(".foot1").style.display = "block"
            }
            if (erro == 6) {
                document.querySelector(".leg2").style.display = "block"
                document.querySelector(".foot2").style.display = "block"
                alert("Que pena, você perdeu o jogo!")
                if (alert) {
                    newGame();
                }
            }            

            while(index != -1) {
                arrayLetter.push(index)
                word[index] = letter
                index = wordSorted[0].indexOf(letter, index + 1)
            }
            
            if (word[0] == undefined) {
                document.querySelector("#l1").innerHTML = ""
            } else {
                document.querySelector("#l1").innerHTML = word[0]
            }
            if (word[1] == undefined) {
                document.querySelector("#l2").innerHTML = ""
            } else {
                document.querySelector("#l2").innerHTML = word[1]
            }
            if (word[2] == undefined) {
                document.querySelector("#l3").innerHTML = ""
            } else {
                document.querySelector("#l3").innerHTML = word[2]
            }
            if (word[3] == undefined) {
                document.querySelector("#l4").innerHTML = ""
            } else {
                document.querySelector("#l4").innerHTML = word[3]
            }
            if (word[4] == undefined) {
                document.querySelector("#l5").innerHTML = ""
            } else {
                document.querySelector("#l5").innerHTML = word[4]
            }
            if (word[5] == undefined) {
                document.querySelector("#l6").innerHTML = ""
            } else {
                document.querySelector("#l6").innerHTML = word[5]
            }
            if (word[6] == undefined) {
                document.querySelector("#l7").innerHTML = ""
            } else {
                document.querySelector("#l7").innerHTML = word[6]
            }

            btn.disabled = true
            if (btn.target) {
                btn.disabled = false
            }

            if (arrayLetter.length == 7) {
                alert("Parabéns você venceu o jogo!!")
                if (alert) {
                    newGame();
                }
            }
        })
        btn.disabled = false
    })
}

function newGame() {
    document.location.reload(true)
}