export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBOURS = "@@details/SET_NEIGHBOURS";

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});
const setLoading = () => ({ type: SET_LOADING });
const setError = (error) => ({
  type: SET_ERROR,
  payload: error.message,
});
const setNeighbours = (countries) => ({
  type: SET_NEIGHBOURS,
  payload: countries,
});

export const clearDetails = () => ({ type: CLEAR_DETAILS });

export const loadCountryInfo =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((e) => dispatch(setError(e)));
  };

export const loadNeighbours =
  (countries) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(countries))
      .then(({ data }) => dispatch(setNeighbours(data.map((el) => el.name))))
      .catch(console.error);
  };
