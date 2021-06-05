import React from "react";
import HeandlinesTeam from "./HeandlinesTeam";
import AlternantesTeam from "./AlternantesTeam";
import { useSelector } from "react-redux";
import cancha from "../images/cancha.svg";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  playeres_selection: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    zIndex: 2,
    minWidth: 80,
  },
  cancha_img: {
    position: "relative",
    width: "100%",
    height: "70%",
  },
  team_manager: {
    width: "100%",
  },
}));

const TeamManager = () => {
  const classes = useStyles();

  const alternates = useSelector((state) => state.alternates);
  const headlines = useSelector((state) => state.headlines);

  return (
    <div className={classes.team_manager}>
      <div className={classes.playeres_selection}>
        <HeandlinesTeam heandlines={headlines} />
        <AlternantesTeam alternates={alternates} />
      </div>
      <img className={classes.cancha_img} src={cancha} alt="cancha" />
    </div>
  );
};

export default TeamManager;
