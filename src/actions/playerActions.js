import {
  NEW_HEANDLIN,
  NEW_ALTERNATE,
  DELETE_ALTERNATE,
  DELETE_HEANDLINE,
} from "../types";

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
export function deletePlayerAlternate(player) {
  return (dispatch) => {
    dispatch(deletePlayer(player));
  };
}
const deletePlayer = (player) => ({
  type: DELETE_ALTERNATE,
  payload: player,
});
export function deletePlayerHeandline(player) {
  return (dispatch) => {
    dispatch(deleteHeandlines(player));
  };
}
const deleteHeandlines = (player) => ({
  type: DELETE_HEANDLINE,
  payload: player,
});
