import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
	name: "userData",
	initialState: {
		language: "english",
	},
	reducers: {
		setLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { setLanguage } = userDataSlice.actions;

export default userDataSlice.reducer;
