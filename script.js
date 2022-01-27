let keyboard = document.querySelector("#letter")
function generateAlphabets() {
    var alphabets = [];
    var start = 'A'.charCodeAt(0);
    var last  = 'Z'.charCodeAt(0);
    for (var i = start; i <= last; ++i) {
        let kbd = document.createElement('KBD');
      alphabets.push(String.fromCharCode(i));
      kbd.innerText = String.fromCharCode(i);
      keyboard.appendChild(kbd);
      kbd.dataset.letter = String.fromCharCode(i);
      kbd.classList.add("m-1");
      kbd.classList.add("display-4");
      kbd.addEventListener('click', () => {
        kbd.style.display = "none";
    });
    
    }
    
    return alphabets.join('');
}

generateAlphabets();

let motMystere = [
"CHIEN",
"CHAT",
"CHEVAL",
"LAPIN",
"COCHON"
]

let randNum = Math.floor(Math.random() * motMystere.length);
let choosenWord = motMystere[randNum].toUpperCase();
let rightWord = [];
let wrongWord = [];
let underScore = []; 

// DOM

let domUnderScore = document.querySelectorAll('.underscore');
let domRightGuess = document.querySelectorAll('.rightGuess');
let domWrongGuess = document.querySelectorAll('.wrongGuess');


console.log(choosenWord);

let generateUnderscore = () => { 
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());

keyboard.addEventListener('click', (e) => {
    let keyword = e.target.dataset.letter
    
    console.log(choosenWord.indexOf(keyword));

    if(choosenWord.indexOf(keyword) > -1){
     
        let pos = -1;
        while ((pos = choosenWord.indexOf(keyword, pos + 1)) != -1) {
          if (pos != -1) {
            underScore[pos] = keyword;
          }
        }

        rightWord.push(keyword);
        underScore[choosenWord.indexOf(keyword)] = keyword;
        domUnderScore[0].innerHTML = underScore.join(' ');
        domRightGuess[0].innerHTML = rightWord;

        if(underScore.join('') === choosenWord) {
            alert('You win FDP');
        }

    }else{
        wrongWord.push(keyword);
        domWrongGuess[0].innerHTML = wrongWord;
        
        if(wrongWord.length >= 8){
            alert("t'as perdu pd");
            keyboard.style.display = "none";

        }
    }
});



domUnderScore[0].innerHTML = underScore.join(' ');
