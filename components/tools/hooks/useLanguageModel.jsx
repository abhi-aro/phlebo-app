import content from "@utils/content";
import { useSelector } from "react-redux";

const useLanguageModel = (pageList) => {
	const { language } = useSelector((state) => state.userData);

	let pageContent = content?.[language];

	for (let index = 0; index < pageList.length; index++) {
		pageContent = pageContent?.[(pageList?.[index]).toLowerCase()] || {};
	}

	return { pageContent };
};

export default useLanguageModel;
