import { setLanguage } from "@redux/slices/userDataSlice";
import content from "@utils/content";
import { useDispatch, useSelector } from "react-redux";

const useLanguageModel = (pageList) => {
	const { language } = useSelector((state) => state.userData);
	const dispatch = useDispatch();

	let pageContent = content?.[language];

	for (let index = 0; index < pageList.length; index++) {
		pageContent = pageContent?.[(pageList?.[index]).toLowerCase()] || {};
	}

	const updateLanguage = async (language) => {
		await dispatch(setLanguage(language));
	};

	return { pageContent, updateLanguage };
};

export default useLanguageModel;
