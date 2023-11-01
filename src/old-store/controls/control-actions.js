export const SET_SEARCH = "@@controls/SET_SEARCH";
export const SET_REGION = "@@controls/SET_REGION";
export const CLEAR_UP = "@@controls/CLEAR_UP";

export const setSearch = (data) => ({ type: SET_SEARCH, payload: data });

export const setRegion = (data) => ({ type: SET_REGION, payload: data });

export const setClear = () => ({ type: CLEAR_UP });
