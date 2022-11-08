import { SET_LOADING, SET_PEOPLE } from "./people-actions";

const initialState = {
  status: true,
  list: [],
};

export const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: true,
      };

    case SET_PEOPLE:
      return {
        ...state,
        status: false,
        list: payload,
      };

    default:
      return state;
  }
};
