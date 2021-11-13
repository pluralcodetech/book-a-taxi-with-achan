import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";


const configureStore = (preloadedState: any) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export { configureStore };