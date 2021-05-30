import { NEW_HEANDLIN, NEW_ALTERNATE } from "../types";

//cargar los jugadores

export function newPlayer(player) {
  return (dispatch) => {
    dispatch(newHeadline(player));
  };
}
const newHeadline = (player) => ({
  type: NEW_HEANDLIN,
  payload: player,
});
export function newAlternante(player) {
  return (dispatch) => {
    dispatch(createAlternate(player));
  };
}
const createAlternate = (player) => ({
  type: NEW_ALTERNATE,
  payload: player,
});
