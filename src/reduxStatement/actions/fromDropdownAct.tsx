import { fromDataBegin, fromDataFailure, fromDataSuccess } from "../reducers/fromDropdownRed";const fromDropdownAct = (id: any) => async dispatch => { 
    dispatch(fromDataBegin());

    try {
        const response = await fetch(`https://watchoutachan.herokuapp.com/api/airline_branch/${id}`, {
            method: 'post',
        })
        handleErrors(response);


        let json = await response.json();
        
        dispatch(fromDataSuccess(json));
    } catch (error) {
        dispatch(fromDataFailure(error));
    }
};

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
export default fromDropdownAct;