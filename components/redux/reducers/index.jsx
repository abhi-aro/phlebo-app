import { combineReducers } from "@reduxjs/toolkit";
import onboardReducer from "../slices/onboardSlice";

const rootReducer = combineReducers({
	onboard: onboardReducer,
});

export default rootReducer;
