

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

    let board = ['','','','','','','','','']; 
    let turn = "X";
    let winner = false ;
    let tie = false ;
    let player
     
/*------------------------ Cached Element References ------------------------*/

    const squareEls = document.querySelectorAll('.sqr');
    const messageEl = document.querySelector('#message') 
    const resetBtn = document.querySelector('.reset')
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0 ,3, 6],
        [1 ,4, 7],
        [2 ,5, 8],
        [0 ,4, 8],
        [2 ,4, 6]
      ]

/*-------------------------------- Functions --------------------------------*/

    const init = () => {

    board = ['','','','','','','','','']; 
    winner = false
    tie = false
    turn ='X'
       render(); 
    }
    

    const render = () => {

        updateBoard();
        updateMessage();

    }

    const updateBoard = () => {

        squareEls.forEach((square, index) => {
            square.textContent = board[index];
        });
    }
  


    const updateMessage = () =>{

        if (winner === false && tie === false) {
            messageEl.innerText = `Player ${turn}'s turn`;
        } else if (winner === false && tie === true) {
            messageEl.innerText = "It's a Tie";
        } else {
            messageEl.innerText = `Player ${turn} wins!`;
        }

    }

    
    function handleClick(event) {
        const squareIndex = parseInt(event.target.id);
        
        if (board[squareIndex] !== '' || winner) {
            return;
        }

        // if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner) {
    //     return; }
    
        placePiece(squareIndex);
        checkForWinner();
        checkForTie();
        switchPlayerTurn();
        render();
    }

     const placePiece = (index) => {
            board[index] = turn;
        }



        function checkForWinner() {
            for (const combo of winningCombos) {
              const [a, b, c] = combo;
          
              if (board[a] != '' && board[a] === board[b] && board[a] === board[c]) {
                winner= true;
                return
              }
            }
            return false;
          }


          function checkForTie() {

            if(winner){
                return
            }
            else if (board.some(square => square === '')){

            }
            else{
                tie= true ;
            }
          }



          function switchPlayerTurn() {
            if (winner) {
                return;
            }
            
            if (turn === 'X') {
                turn = 'O';
            } else if (turn === 'O') {
                turn = 'X';
            }
        }
        

/*----------------------------- Event Listeners -----------------------------*/


        
    squareEls.forEach(square => {
        square.addEventListener('click', handleClick);
        
      });


      resetBtn.addEventListener('click',init);