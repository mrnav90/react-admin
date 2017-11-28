import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import translation from './translation';
import {translationWithStore} from 'utils';

const rootReducer = combineReducers({
  routing: routerReducer,
  i18n: translation
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

translationWithStore(store);

export {store, rootReducer};
