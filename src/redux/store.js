import { legacy_createStore as  createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer";



const rootReducer = combineReducers({
    user: authReducer,
});

 export const store = createStore(rootReducer, applyMiddleware(thunk));
