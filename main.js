'use strict';


/** Funzioni **/


function clickOnCell(allCells , positionCellClicked, positionsCellBomb){

    console.log("Casella cliccata " + positionCellClicked + 1); //la queryselecton di linea 85 crea un nodo di elementi con indici a partire da zero, quindi alla istruzione facciamo visualizzare in console i + 1;
    if(positionsCellBomb.includes(positionCellClicked)){
        for(let i = 1; i <= allCells.length; i++){ //se ll'utente ha cliccato su una bomba con questo for viene fatto scorrere l'intero array e viene aggiunta una classe alle celli presenti nell'array contententi le posizioni delle bombe;
            if(positionsCellBomb.includes(i)){ //se l'array contenente le posizioni delle bombe contiene la posizione della griglia a cui punta il nostro for ->
            allCells[i].classList.add("actived-bomb-cell");// <- allora la nostra cella viene colorata di rosso.
            }   
        }
        console.log("Hai cliccato su una bomba!");
     }else{
        allCells[positionCellClicked].classList.add("actived-safe-cell");
        console.log("Hai cliccato su una casella safe, GG!");
     }
}

function createBombs(bombsNumberMax){ //funzione creazione array di bombe
    let x;
    const arrayBombs = []; 
    for( let i = 1 ; i <= 16 ; i++){
        do{
            x = Math.floor(Math.random() * bombsNumberMax) + 1 //genero un numero casuale grazie al parametro importato
            console.log("Numero bomba generato: " + x);
            if(arrayBombs.includes(x)){  //controllo che il numero generato non sia già presente nell'array per evitare coppie di numeri
                console.log("Attenzione: Numero scartato perchè già presente nell'array.");
            }
        }while(arrayBombs.includes(x))
        arrayBombs[i] = x ; //se il numero generato non è già presente nell'array verrà scritto. 
        console.log("Numero bomba inserito nell'array: " + arrayBombs[i]);
    }
    console.log("Bomber generate, pronte per fare fuoco!"); //l'array di bombe è pronto
    console.log(arrayBombs);
    console.log(arrayBombs.length);
    const selectedAllCell = document.querySelectorAll(".cell"); //seleziono tutte le celle create
    console.log(selectedAllCell);
    for(let i = 0; i < selectedAllCell.length; i++) {
        selectedAllCell[i].addEventListener('click', function(){ //applico a tutte le caselle un evento in attesa di un click
            clickOnCell(selectedAllCell, i , arrayBombs); 
        });
      }
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
    createTable(); //la tabella viene creata dall'apposita funzione
})



