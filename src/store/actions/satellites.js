import {
    FETCH_SATTELITES,
    CLEAR_SATTELITES
  } from "./actionTypes.js";
  import { SATTELITES_URL } from "../../config";
  import { getData, postData, objToQueryString } from "../../lib";
  
  export const fetchSattelites = (dispatch) => (payload) =>
    dispatch((dispatch, getState) => {
      const { filter,sattelites } = getState();
      return getData(
        `${SATTELITES_URL}&${objToQueryString(filter)}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.length > 0) {
            return dispatch({ type: FETCH_SATTELITES, payload: response });
          } else {
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  
  export const clearSattelites = (dispatch) => (payload) => {
    dispatch({
      type: CLEAR_SATTELITES,
    });
  };