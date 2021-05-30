import React from "react";
import { useSelector } from "react-redux";
import Player from "./Player";

const Playeres = () => {
  const playeres = useSelector((state) => state.playeres);
  return (
    <section>
      <h2>Jugadores</h2>
      <div className="container-playeres">
        {playeres.map((player, index) => {
          return <Player key={index} player={player} />;
        })}
      </div>
    </section>
  );
};

export default Playeres;
