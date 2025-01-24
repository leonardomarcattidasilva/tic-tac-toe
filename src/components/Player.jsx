import React from "react";
import usePlayerName from "../hooks/usePlayerName";

const Player = ({ name, symbol, isActive, onPlayernameChange }) => {
   const { handleEdit, player, isEditing } = usePlayerName(name, symbol, onPlayernameChange);

   return <li className={isActive ? 'active' : undefined}>
      <span className="player">
         {player}
         <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
   </li>
}

export default Player;