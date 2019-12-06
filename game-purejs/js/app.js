import GameViewModel from "./game.js";

let game = new GameViewModel();
window.onload = () => {
    let triesElement = document.querySelector("#tries");
    let levelElement = document.querySelector("#level");
    let guessElement = document.querySelector("#guess");
    let movesElement = document.querySelector("#moves");
    let playElement = document.querySelector("#play");
    function clearElement(element) {
        let node = element;
        while (element.hasChildNodes()) {
            if (node.hasChildNodes()) {
                node = node.lastChild;
            } else {
                node = node.parentNode;
                node.removeChild(node.lastChild);
            }
        }
    } ;
    function updateDOM(game) {
        triesElement.innerText = game.tries;
        levelElement.innerText = game.level;
        clearElement(movesElement);
        game.moves.forEach( move => {
            let tr = movesElement.insertRow();
            let td1 = tr.insertCell(0);
            let td2 = tr.insertCell(1);
            td1.appendChild(document.createTextNode(move.guess));
            td2.appendChild(document.createTextNode(move.message));
        });
    }

    playElement.addEventListener(
        "click",
        ()=>{
               game.play(guessElement.value);
               updateDOM(game);
        }, false);
};
