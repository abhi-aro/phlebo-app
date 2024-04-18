import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchOnboardStatus,
	setOnboardStatus,
} from "../../redux/slices/onboardSlice";

const useOnboardingStatus = () => {
	const { isUserOnboarded, isLoading } = useSelector(
		(state) => state.onboard
	);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(fetchOnboardStatus());
		})();
	}, []);

	const addOnboarding = async () => {
		await dispatch(setOnboardStatus(true));
	};

	const removeOnboarding = async () => {
		await dispatch(setOnboardStatus(false));
	};

	return { isUserOnboarded, isLoading, removeOnboarding, addOnboarding };
};

export default useOnboardingStatus;
