


export default class Board {
    constructor(grid, hasWinner){
        this.grid = grid;
        this.hasWinner = hasWinner;
    }

    grid = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    

    initializeBoard(){
        this.grid = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]; 
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
                // Vérifier si la case est déjà prise
        if (this.grid[row][col] === "-") {
            // La case est vide, placez le symbole du joueur
            this.grid[row][col] = symbol;
            return true;
        } else {
            // La case est déjà occupée, retournez false
            return false;
        }

    }

    checkVictory(){

            // Définir toutes les combinaisons gagnantes possibles
            const winningCombos = [
                // Combinaisons horizontales
                [[0, 0], [0, 1], [0, 2]],
                [[1, 0], [1, 1], [1, 2]],
                [[2, 0], [2, 1], [2, 2]],
                // Combinaisons verticales
                [[0, 0], [1, 0], [2, 0]],
                [[0, 1], [1, 1], [2, 1]],
                [[0, 2], [1, 2], [2, 2]],
                // Combinaisons diagonales
                [[0, 0], [1, 1], [2, 2]],
                [[0, 2], [1, 1], [2, 0]]
            ];
        
            // Parcourir les combinaisons gagnantes
            for (const combo of winningCombos) {
                const [a, b, c] = combo;
                const [rowA, colA] = a;
                const [rowB, colB] = b;
                const [rowC, colC] = c;
        
                // Vérifier si les trois cases de la combinaison sont du même joueur
                if (
                    this.grid[rowA][colA] !== "-" &&
                    this.grid[rowA][colA] === this.grid[rowB][colB] &&
                    this.grid[rowA][colA] === this.grid[rowC][colC]
                ) {
                    // Une combinaison gagnante a été trouvée, définir hasWinner à true
                    this.hasWinner = true;
                    return true;
                }
            }
        
            // Aucune combinaison gagnante trouvée
            return false;
        }
        
    
    
    isFull() {
            // Parcourir toutes les cases du plateau
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    // Si une case est vide, le plateau n'est pas plein
                    if (this.grid[row][col] === "-") {
                        return false;
                    }
                }
            }
            // Si aucune case n'est vide, le plateau est plein
            return true;
        }
        

    resetBoard() {
            // Remplir toutes les cases du plateau avec des chaînes vides
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    this.grid[row][col] = "-";
                }
            }
        
            // Réinitialiser hasWinner à false
            this.hasWinner = false;
        
            // Afficher le plateau
            this.displayBoard();
        }
        
}