


export default class Board {
    constructor(grid, hasWinner){
        this.grid = grid;
        this.hasWinner = hasWinner;
    }

    grid = [["", "", ""], ["", "", ""], ["", "", ""]];
    hasWinner = "";

    initializeBoard(){
        this.grid = [["", "", ""], ["", "", ""], ["", "", ""]]; 
        this.hasWinner = false
    }

    displayBoard(){
        const boardDiv = document.getElementById("board");
        boardDiv.innerHTML = "";
        for(let row = 0; row < this.grid.length; row++){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            for (let col = 0; col < this.grid[row].length; col++){
                const button = document.createElement("button");
                button.classList.add("case");
                button.id = `btn-${row}-${col}`;
                button.textContent = this.grid[row][col];

                button.addEventListener("click", () => this.handleButtonClick(row, col));
                rowDiv.appendChild(button);
            }
            boardDiv.appendChild(rowDiv);
        }

    }

    placeMove(row, col, symbol){
        

    }

    checkVictory(){

    }
    
    isFull(){

    }

    resetBoard(){

    }
}