import { setLanguage } from "@redux/slices/userDataSlice";
import content from "@utils/content";
import { useDispatch, useSelector } from "react-redux";

const useLanguageModel = (pageList = []) => {
	const { language } = useSelector((state) => state.userData);
	const dispatch = useDispatch();

	const languageList = content?.languageList;
	let pageContent = content?.[language];

	for (let index = 0; index < pageList.length; index++) {
		const pageListLower = pageList[index].toLowerCase();
		const matchingKey = Object.keys(pageContent).find(
			(key) => key.toLowerCase() === pageListLower
		);
		if (matchingKey) {
			pageContent = pageContent[matchingKey];
		} else {
			pageContent = {};
		}
	}

	const updateLanguage = async (language) => {
		await dispatch(setLanguage(language));
	};

	return { pageContent, updateLanguage, languageList };
};

export const pageData = {
	onboarding: ["Onboarding", "slides"],
	paginator: ["Onboarding", "slides"],
	language: ["languageSelection"],
};

export default useLanguageModel;
