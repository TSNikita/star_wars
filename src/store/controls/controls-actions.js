export const SET_COLOR = "SET_COLOR";
export const SET_SEARCH = "SET_SEARCH";

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: color,
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
