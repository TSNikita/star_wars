import { SET_WOKKI_LANG, SET_WOKKI_LOAD } from "./wokki-actions";

const initialState = {
  status: true,
  listWokki: [],
};

export const wokkiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WOKKI_LOAD:
      return {
        ...state,
        status: true,
      };
    case SET_WOKKI_LANG:
      return {
        ...state,
        status: false,
        listWokki: payload,
      };
    default:
      return state;
  }
};
