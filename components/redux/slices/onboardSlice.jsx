import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getAsyncStorage,
	setAsyncStorage,
} from "../../tools/utils/AsyncStorage";

export const fetchOnboardStatus = createAsyncThunk(
	"onboard/fetchOnboardStatus",
	async () => {
		const isUserOnboarded = await getAsyncStorage("@user_onboarded", false);

		return isUserOnboarded;
	}
);

export const setOnboardStatus = createAsyncThunk(
	"onboard/setOnboardStatus",
	async (onboarded, { dispatch }) => {
		await setAsyncStorage("@user_onboarded", onboarded);
		dispatch(fetchOnboardStatus());

		return onboarded;
	}
);

const onboardSlice = createSlice({
	name: "onboard",
	initialState: {
		isUserOnboarded: null,
		isLoading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOnboardStatus.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchOnboardStatus.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isUserOnboarded = action.payload;
			})
			.addCase(fetchOnboardStatus.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const {} = onboardSlice.actions;

export default onboardSlice.reducer;
