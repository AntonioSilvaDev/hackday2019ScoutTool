import { combineReducers } from 'redux';
import selectedReducer from './Components/SelectedCities/selectedReducer';

const rootReducer = combineReducers({
    search: selectedReducer
});

export default rootReducer;
