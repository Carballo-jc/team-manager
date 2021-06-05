import playeres from "../data/playeres";
import {
  CARGAR_JUGADORES,
  NEW_HEANDLIN,
  NEW_ALTERNATE,
  DELETE_ALTERNATE,
  DELETE_HEANDLINE,
} from "../types";

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
        headlines: state.headlines,
      };
    case NEW_HEANDLIN:
      return {
        ...state,
        headlines: [...state.headlines.concat(action.payload)],
        playeres: state.playeres.filter(
          (headline) => headline.id !== action.payload.id
        ),
      };
    case NEW_ALTERNATE:
      return {
        ...state,
        alternates: [...state.alternates, action.payload],
        playeres: state.playeres.filter(
          (alternate) => alternate.id !== action.payload.id
        ),
      };
    case DELETE_ALTERNATE:
      return {
        ...state,
        alternates: state.alternates.filter((alternat) => alternat.id !== action.payload.id),
        playeres: [...state.playeres,action.payload]
      };
    case DELETE_HEANDLINE:
      return {
        ...state,
        headlines: state.headlines.filter((alternat) => alternat.id !== action.payload.id),
        playeres: [...state.playeres,action.payload]
      };
    default:
      return state;
  }
};
export default playerReducer;
