import { SERVICIOS } from '../../data/services';
import { FILTER_SERVICES } from '../actions/services.action';

const INITIAL_STATE = {
  list: SERVICIOS,
  filteredServices: [],
  selected: null,
}

const ServicesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_SERVICES:
      return {
        ...state,
        filteredServices: state.list.filter(service => service.category === action.categoryID),
      }
    default:
      return { ...state };
  }
}

export default ServicesReducer;