import React from 'react'


const scissors - "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";
const PlayerCard = (props) => {
  console.log(props)
  return (
    <div className = "player-card">
      <img src={rock}/>
    </div>
  )
}

export default PlayerCard;
