import React from "react";
import { useSelector } from "react-redux";
import Player from "./Player";
import TeamManager from "../components/TeamManager";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  content_card: {
    display: "flex",
    flexDirection:'column',
    justifyContent: "space-between",
    maxWidth: '100%',
    margin:5,
    minWidth: 80,
    overflow:'scroll',
    maxHeight:850,
    boxSizing:'border-box'
  },
  section_container:{
    display:'flex',
    flexDirection:'row',
    
  }
}));


const Playeres = () => {
  const classes = useStyles();

  const playeres = useSelector((state) => state.playeres);
  return (
    <section className={classes.section_container}>
      <div  className={classes.content_card}>
      <h2>Jugadores</h2>
       {playeres.map((player, index) => {
          return <Player key={index} player={player} />;
        })}
      </div>
      <TeamManager />
    </section>
  );
};

export default Playeres;
