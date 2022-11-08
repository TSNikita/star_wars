export const SET_WOKKI_LANG = "SET_WOKKI_LANG";
export const SET_WOKKI_LOAD = "SET_WOKKI_LOAD";

export const wokkiLanguage = (wokki) => ({
  type: SET_WOKKI_LANG,
  payload: wokki,
});

export const setLoadingWokki = () => ({
  type: SET_WOKKI_LOAD,
});

export const loadWokkiPeople =
  () =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoadingWokki());
    client
      .get(api.ALL_PEOPLE_WOKKI)
      .then(({ data }) => dispatch(wokkiLanguage(data)));
  };
