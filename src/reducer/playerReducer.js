import playeres from "../data/playeres";
import { CARGAR_JUGADORES, NEW_HEANDLIN, NEW_ALTERNATE } from "../types";

const initialState = {
  playeres,
  headlines: [],
  alternates: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_JUGADORES:
      return {
        ...state,
      };
    case NEW_HEANDLIN:
      return {
        ...state,
        headlines: [...state.heandlines, action.payload],
      };
    case NEW_ALTERNATE:
      return {
        ...state,
        alternates: [...state.alternates, action.payload],
      };
    default:
      return state;
  }
};
export default playerReducer;
