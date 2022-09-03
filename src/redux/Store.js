import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./counter/CounterReducer";

const Store = () => createStore(reducer, applyMiddleware(logger, thunk))

export default Store;