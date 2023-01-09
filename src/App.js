import "./App.css";
import Footer from "./components/Footer";
import { Chessboard } from "react-chessboard";
import { useState } from "react";
import { Chess } from "chess.js";

function App() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const result = game.move(move);
    setGame(game);
    console.log(game, result);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  const onDrop = (sourceSquare, targetSquare, piece) => {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      // promotion: "q", // always promote to a queen for example simplicity
    });

    if (move === null) {
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <Footer />
      <div className="boardContainer">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
  );
}

export default App;
