export const SET_PEOPLE = "SET_PEOPLE";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setPeople = (people) => ({
  type: SET_PEOPLE,
  payload: people,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const loadPeolpe =
  () =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoading());

    client.get(api.ALL_PEOPLE).then(({ data }) => dispatch(setPeople(data)));
  };
