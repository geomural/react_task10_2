import {CLEAN_CURRENT_SERVICE, EDIT_SERVICE, CHANGE_SERVICE_FIELD} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  id: false //false if not edit, <id> if edit
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case CLEAN_CURRENT_SERVICE:
      return {name: "", price: "", id: false};
    case EDIT_SERVICE:
      return {name: action.payload.name, price: action.payload.price, id: action.payload.id};
    default:
      return state;
  }
}
