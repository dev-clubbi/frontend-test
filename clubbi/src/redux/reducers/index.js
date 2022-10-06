import { combineReducers } from "redux";
import actorReducer from "./actorReducer";
import filmsReducer from "./filmsReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  actorReducer,
  filmsReducer,
  locationReducer,
});

export default rootReducer;
