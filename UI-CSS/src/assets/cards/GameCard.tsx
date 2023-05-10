

function GameCard() {
  return (
    
    <div className="game-card">
        <div className="game-card-image">
            <img className="img-in-card" src="nier.jpg" alt="Video Game Cover" width="300px" height="170px"></img>
                <div className="game-card-consoles">
                <ul>
                    <li>
                        <img src="playstation.svg" alt="Platform logo" width="30px" height="30px"></img>
                    </li>
                    <li>
                        <img src="xbox.svg" alt="Platform logo" width="30px" height="30px"></img>
                    </li>
                    <li>
                        <img src="pc.svg" alt="Platform logo" width="30px" height="30px"></img>
                    </li>
                    <li>
                        <img src="nintendo.svg" alt="Platform logo" width="30px" height="30px"></img>
                    </li>
                </ul>
                </div>
                            </div>
                            <div className="game-card-title"><p className="game-card-name">NieR:Automata Game of the YoRHa Edition</p><p className="game-card-score">91</p><p className="game-card-release">2019</p>
                            </div>
                            </div>
  )
}

export default GameCard
