import { legacy_createStore, combineReducers } from 'redux';

import usersReducer from './Users/Users.reducer';

const rootReducer = combineReducers({
    users: usersReducer
})
const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store;