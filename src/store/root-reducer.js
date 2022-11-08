import { combineReducers } from "redux";
import { controlsReducer } from "./controls/controls-reducer";
import { detailsPeopleReducer } from "./InfoDetails/infoDetails-reducer";
import { peopleReducer } from "./People/people-reducer";
import { wokkiReducer } from "./Wokki/wokki-reducer";

export const rootReducer = combineReducers({
  peoples: peopleReducer,
  control: controlsReducer,
  details: detailsPeopleReducer,
  wokki: wokkiReducer,
});
