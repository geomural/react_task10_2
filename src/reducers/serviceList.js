import {nanoid} from 'nanoid';
import {UPDATE_SERVICE, ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case UPDATE_SERVICE:
      let data = state.map(service => service.id === action.payload.id ? {id: action.payload.id, name: action.payload.name, price: action.payload.price} : service);
      return data;
    default:
      return state;
  }
}
