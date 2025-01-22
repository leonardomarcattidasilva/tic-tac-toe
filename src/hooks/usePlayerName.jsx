import { useState } from "react";
const usePlayerName = (name) => {   
   const [isEditing, setIsEditing] = useState(false);
   const [playerName, setPlayerName] = useState(undefined);
   const handleEdit = () => setIsEditing(prevState => !prevState);
   const handleChangePlayerName = (event) => {
      setPlayerName(event.target.value);
   } 

   const player = isEditing ? <input type="text" defaultValue={name} value={playerName} onChange={handleChangePlayerName} /> : <span className="player-name">{playerName ?? name}</span>
   return {handleEdit, player, isEditing}
}

export default usePlayerName;