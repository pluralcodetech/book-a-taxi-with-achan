import { FROMDATA } from "../constants/fromDropdown";

export interface FromDataBeginAction {
  type: FROMDATA.FROM_DATA_BEGIN;
}
export const fromDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: FROMDATA.FROM_DATA_BEGIN
  });
};

export interface FromDataSuccessAction {
  type: FROMDATA.FROM_DATA_SUCCESS;
  payload: any;
}
export const fromDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: FROMDATA.FROM_DATA_SUCCESS,
    payload: { data }
  });
};
export interface FromDataFailureAction {
  type: FROMDATA.FROM_DATA_FAILURE;
  payload: any;
}
export const fromDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: FROMDATA.FROM_DATA_FAILURE,
    payload: { error }
  });
};

type ActionTypes =
    | FromDataBeginAction
    | FromDataSuccessAction
    | FromDataFailureAction

interface DataState {
  fromDropDown: object[];
  loading: boolean;
  error: any;
}
const getInitialState = () => {
  return {
    fromDropDown: [],
    loading: false,
    error: null
  };
};

const fromDropDownReducer = ( state: DataState = getInitialState(), action: ActionTypes) => { 
    switch (action.type) {
      case FROMDATA.FROM_DATA_BEGIN: {
        return {
          ...state,
          loading: true,
          error: null,
        };
      }
      case FROMDATA.FROM_DATA_SUCCESS: {
        return {
          ...state,
          loading: false,
          fromDropDown: action.payload.data,
        };
      }
      case FROMDATA.FROM_DATA_FAILURE: {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      }
      default:
        return state;
  }
};

export default fromDropDownReducer;