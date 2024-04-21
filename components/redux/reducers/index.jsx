import { combineReducers } from "@reduxjs/toolkit";

import onboardReducer from "@redux/slices/onboardSlice";
import userDataReducer from "@redux/slices/userDataSlice";

const rootReducer = combineReducers({
	onboard: onboardReducer,
	userData: userDataReducer,
});

export default rootReducer;
