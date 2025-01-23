import React from "react";

const Log = ({ turns }) => {

   return <ol id="log">
      {
         turns.map(turn => {
            return <li key={`${turn.square.row}${turn.square.col}`}>{
               `Player ${turn.player} selected ${turn.square.row}, ${turn.square.col}`}
            </li>
         })
      }
   </ol>
}

export default Log;