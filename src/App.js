import React, { Component } from 'react';
import PlayerCard from './PlayerCard'


class Game extends Component {
  render() {
    return (
      <div className="style">
        <div>
          <PlayerCard />
          <PlayerCard />
        </div>
        <div className = "winner">Put the winner here</div>
        <button type="button">Play the Game</button>
      </div>

    );
  }
}

export default App;
