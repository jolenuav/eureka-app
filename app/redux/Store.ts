import { combineReducers, createStore } from 'redux';
import authenticationReducer from './authentication/AuthenticationDuck';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

export default function generateStore() {
  const store = createStore(
    rootReducer
  );
  return store;
}
