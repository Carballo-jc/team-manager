import React from "react";
import { useDispatch } from "react-redux";
import { newPlayer, newAlternante } from "../actions/playerActions";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  btn: {
    display: "flex;",
  },
}));

const Player = ({ player }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //mandallamar el action de crear el player
  const createPlayer = (player) => dispatch(newPlayer(player));
  const createNewPlayer = () => {
    //qgregar el titular
    createPlayer(player);
  };
  const createAlternante = (player) => dispatch(newAlternante(player));
  const createNewAlternante = () => {
    createAlternante(player);
  };
  const { image, name } = player;

  return (
    <article className="article_player">
      <img src={image} alt={name} style={{ maxWidth: "200px" }} />
      <h3>{name}</h3>
      <div className={classes.btn}>
        <button onClick={createNewPlayer}>Titular</button>
        <button onClick={createNewAlternante}>Suplente</button>
      </div>
    </article>
  );
};

export default Player;
