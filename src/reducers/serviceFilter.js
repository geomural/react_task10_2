import {FILTER_SERVICE} from '../actions/actionTypes'

const initialState = { filteredItems: [],
                       filterText: false }; //текст, по которому производится фильтрация

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const {items, value} = action.payload;
      //если фильтр не установлен
      if (!value) {
        return { filteredItems: items, filterText: false };
      }
      //ищем подходящие значения
      let data = items.filter(service => service.name.match(value) ? service : null);
      return { filteredItems: data, filterText: value };         
    default:
      return state;
  }
}
