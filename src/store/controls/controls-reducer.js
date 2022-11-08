import { SET_COLOR, SET_SEARCH } from "./controls-actions";

const initialState = {
  search: "",
  color: "all",
};

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COLOR:
      return {
        ...state,
        color: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
