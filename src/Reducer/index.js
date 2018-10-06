import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './FetchSession';
import { chooseDistrict } from './Session';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  district: chooseDistrict
});
