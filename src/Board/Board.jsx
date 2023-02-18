import {useEffect, useRef, useState} from 'react';

import './Board.css';

/**
 * TODO: add a more elegant UX for before a game starts and after a game ends.
 * A game probably shouldn't start until the user presses an arrow key, and
 * once a game is over, the board state should likely freeze until the user
 * intentionally restarts the game.
 */



function Board() {

    const BOARD_SIZE = 15; //the leght of array
    
    const[score , setScore] = useState(0);
    const[board, setBoard] = useState(new Array(BOARD_SIZE).fill(0).map(row => new Array(BOARD_SIZE)));
  return (

   <> 
    <div className='board'>
      {board.map((row, rowIdx)=>(
        
        <div className="row" key={rowIdx}>
          {row.map((cell, cellIdx)=>{
            <div className="cell" key={cellIdx}>
              {console.log(row)}
            </div>
          })}
        </div>
      ))}
    </div>

  </>
  )
}

export default Board