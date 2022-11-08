import { SET_ERROR, SET_LOADING, SET_PEOPLE_INFO } from "./infoDetails-actions";

const initialState = {
  peopleName: null,
  stat: false,
  error: null,
};

export const detailsPeopleReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        stat: true,
      };
    case SET_PEOPLE_INFO:
      return {
        ...state,
        stat: false,
        peopleName: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        stat: false,
      };
    default:
      return state;
  }
};
