import {FILTER_SERVICE} from '../actions/actionTypes'

const initialState = { filteredItems: [],
                       isFilter: false };

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      console.log("serviceFilterReducer action.payload", action.payload)
      const {items, value} = action.payload;
      if (!value) {
        return { filteredItems: items, isFilter: false };
      }
      console.log("items", items);
      console.log("value", value);
      let data = items.filter(service => service.name.match(value) ? service : null);
      console.log("data", data);
      return { filteredItems: data, isFilter: true };
    default:
      return state;
  }
}
