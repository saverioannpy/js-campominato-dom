'use strict';


/** Funzioni **/

function createBombs(bombsNumberMax){ //funzione creazione array di bombe
    let x;
    const arrayBombs = []; 
    for( let i = 1 ; i <= 16 ; i++){
        do{
            x = Math.floor(Math.random() * bombsNumberMax) + 1
            console.log("Numero bomba generato: " + x);
            if(arrayBombs.includes(x)){
                console.log("Attenzione: Numero scartato perchè già presente nell'array.");
            }
        }while(arrayBombs.includes(x))
        arrayBombs[i] = x ;
        console.log("Numero bomba inserito nell'array: " + arrayBombs[i]);
    }
    console.log("Bomber generate pronte per fare fuoco!");
    console.log(arrayBombs);
    console.log(arrayBombs.length);
}

function createTable(){ //funzione per la creazione della griglia di gioco
    const gameGrid = document.querySelector('div.game-grid'); //seleziono la griglia di gioco
    console.log(gameGrid);
    gameGrid.innerHTML = "";
    const difficultySelected = document.getElementById("difficulty-select").value; //controllo la difficoltà selezionata dall'utente
    console.log("Giochiamo a difficoltà: " + difficultySelected);
    switch (difficultySelected) {
        case "easy": //creazione griglia 10x10 per la modalità EASY
            for(let i = 1 ; i <= 100; i++){
                let myCell = document.createElement('div'); //creo un elemento div per la cella
                myCell.classList.add("cell" , "easy"); //do alla cella le sue relative classi
                myCell.append(i);
                console.log("Creata la casella: " + myCell.innerHTML);
                gameGrid.append(myCell); //appendo la cella all'interno della griglia
            }
            console.log("Griglia generata con successo!")
            createBombs(100);
            break;

        case "medium": //creazione griglia 9x9 per la modalità MEDIUM
            for(let i = 1 ; i <= 81; i++){
                let myCell = document.createElement('div'); //creo un elemento div per la cella
                myCell.classList.add("cell" , "medium"); //do alla cella le sue relative classi
                myCell.append(i);
                console.log("Creata la casella: " + myCell.innerHTML);
                gameGrid.append(myCell); //appendo la cella all'interno della griglia
            }
            console.log("Griglia generata con successo!")
            createBombs(81);
            break;

        case "hard": //creazione griglia 7x7 per la modalità HARD
            for(let i = 1 ; i <= 49; i++){
                let myCell = document.createElement('div'); //creo un elemento div per la cella
                myCell.classList.add("cell" , "hard"); //do alla cella le sue relative classi
                myCell.append(i);
                console.log("Creata la casella: " + myCell.innerHTML);
                gameGrid.append(myCell); //appendo la cella all'interno della griglia
            }
            console.log("Griglia generata con successo!")
            createBombs(49);
            break;
        default:
            console.log("caso di default");
    }
    
}


/** Main **/

const playButton = document.getElementById("play-button"); //seleziono il tasto play
playButton.addEventListener("click", function(){ //evento sul tasto play
    createTable();
})
