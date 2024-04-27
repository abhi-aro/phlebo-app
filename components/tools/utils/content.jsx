export default {
	languageList: [
		{ id: 1, key: "english", value: "English", identifier: "A" },
		{ id: 2, key: "hindi", value: "हिंदी", identifier: "अ" },
		{ id: 3, key: "marathi", value: "मराठी", identifier: "आ" },
	],
	english: {
		languageName: "English",
		onboarding: {
			slides: {
				slidesList: [
					{
						id: "1",
						title: "Revolutionizing Tier 1, Tier 2 & Tier 3 India with a digital platform",
						image: require("@assets/onboarding/slide1.png"),
					},
					{
						id: "2",
						title: "Enabling phlebotomists to up-skill themselves to paramedics.",
						image: require("@assets/onboarding/slide2.png"),
					},
					{
						id: "3",
						title: "Creating new mass employment opportunities and transforming lives",
						image: require("@assets/onboarding/slide3.png"),
					},
				],
				skipText: "Skip",
				backText: "Back",
				nextText: "Next",
			},
		},
		languageSelection: {
			primaryTitle: "Choose Language",
			secondaryTitle: "भाषा चुनें",
			buttonText: "Continue",
		},
	},
	hindi: {
		languageName: "हिंदी",
		onboarding: {
			slides: {
				slidesList: [
					{
						id: "1",
						title: "Unlocking a new era of accessible and efficient healthcare services",
						image: require("@assets/onboarding/slide1.png"),
					},
					{
						id: "2",
						title: "Up-skill phlebotomists to paramedics and transform lives",
						image: require("@assets/onboarding/slide2.png"),
					},
					{
						id: "3",
						title: "Create mass employment opportunities for phlebotomists across India",
						image: require("@assets/onboarding/slide3.png"),
					},
				],
				skipText: "Skip",
				backText: "Back",
				nextText: "Next",
			},
		},
		languageSelection: {
			primaryTitle: "Choose Language",
			secondaryTitle: "भाषा चुनें",
			buttonText: "जारी रखना",
		},
	},
	marathi: {
		languageName: "मराठी",
		onboarding: {
			slides: {
				slidesList: [
					{
						id: "1",
						title: "Unlocking a new era of accessible and efficient healthcare services",
						image: require("@assets/onboarding/slide1.png"),
					},
					{
						id: "2",
						title: "Up-skill phlebotomists to paramedics and transform lives",
						image: require("@assets/onboarding/slide2.png"),
					},
					{
						id: "3",
						title: "Create mass employment opportunities for phlebotomists across India",
						image: require("@assets/onboarding/slide3.png"),
					},
				],
				skipText: "Skip",
				backText: "Back",
				nextText: "Next",
			},
		},
		languageSelection: {
			primaryTitle: "Choose Language",
			secondaryTitle: "भाषा निवडा",
			buttonText: "सुरू",
		},
	},
};
