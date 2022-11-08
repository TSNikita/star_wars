export const SET_LOADING = "SET_LOAD";
export const SET_ERROR = "SET_ERROR";
export const SET_PEOPLE_INFO = "SET_PEOPLE_INFO";

export const setLoadName = () => ({
  type: SET_LOADING,
});

export const setErrorName = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const setPeopleInfo = (url) => ({
  type: SET_PEOPLE_INFO,
  payload: url,
});

export const loadPeopleInfoName =
  (id) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoadName());
    client
      .get(api.searchPeople(id))
      .then(({ data }) => dispatch(setPeopleInfo(data[0])))
      .catch((err) => dispatch(setErrorName(err.message)));
  };
