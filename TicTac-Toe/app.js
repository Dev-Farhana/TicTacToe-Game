
const playerOneSymbol = 'x';
const playerTwoSymbol = '🗸';

class TicTacToeGame {

    handleSquareClick(event){
        this.executeMove(event.target.id);
    }

    executeMove(moveIndex){
        if(this.board[moveIndex] == " "){
            this.board[moveIndex] = this.currentPlayer;

            this.updateBoard();

            if(!this.gameWinner()){
            this.currentPlayer = (this.currentPlayer == playerOneSymbol ? 
                                  playerTwoSymbol : playerOneSymbol);
                console.log(this.board);
            } else{
                alert("Player " + this.currentPlayer + " is the Winner!!");
                this.start();
            }
        }

    }

    updateBoard(){
        let gameBoard = document.getElementById('gameBoard');
        let squareElements = gameBoard.childNodes;
        squareElements.forEach((element,index) => {
            if( element.innerText != this.board[index]){
                element.innerText = this.board[index];
            }
        })
    }

    gameWinner(){
        const winCombos = [
            [0,1,2], [3,4,5], [6,7,8], // horizontal;
            [0,3,6], [1,4,7], [2,5,8], // vertical;
                [0,4,8], [2,4,6] // diagonal;
        ];
        return winCombos.find( combo => {
            if( this.board[combo[0]] != " " && this.board[combo[1]] != " " && this.board[combo[2]] != " " &&
            this.board[combo[0]] == this.board[combo[1]] && this.board[combo[1]] ==  this.board[combo[2]] )
            return true
            else{
                return false;
            }
        })

    }

    drawBoard(){
        document.body.innerHTML= " ";
        let gameBoard = document.createElement('div');
        gameBoard.id= 'gameBoard';
        gameBoard.classList.add('board');
        gameBoard.addEventListener('click', this.handleSquareClick.bind(this));



        this.board.forEach((square,index) => {
            let squareElement = document.createElement('div');
            squareElement.id = index;
            squareElement.classList.add('square');
            gameBoard.appendChild(squareElement);
        }
        )
        document.body.appendChild(gameBoard);
    }
    start(){
        this.board = [ " ", " ", " ",
                       " ", " ", " ",
                       " ", " ", " ",];
         this.currentPlayer = playerOneSymbol;
            this.drawBoard();             
    }
}

    const game = new TicTacToeGame();
    game.start()