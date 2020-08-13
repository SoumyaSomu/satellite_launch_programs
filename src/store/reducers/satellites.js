import {
    FETCH_SATTELITES,
    CLEAR_SATTELITES
  } from "../actions/actionTypes.js";
  
  export default function (state = [], action) {
    switch (action.type) {
      case FETCH_SATTELITES:
        return [...state, ...action.payload];
      case CLEAR_SATTELITES:
        return [];
      default:
        return state;
    }
  }
  