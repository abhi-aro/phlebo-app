import { combineReducers } from "@reduxjs/toolkit";
import onboardReducer from "../slices/onboardSlice";
import userDataReducer from "../slices/userDataSlice";

const rootReducer = combineReducers({
	onboard: onboardReducer,
	userData: userDataReducer,
});

export default rootReducer;
