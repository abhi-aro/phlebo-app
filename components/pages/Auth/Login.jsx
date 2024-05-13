import CustomTextInput from "@custom/TextInput";
import globalStyles, { SIZES } from "@globalModules/GlobalStyles";
import useLanguageModel, { pageData } from "@hooks/useLanguageModel";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
	const { pageContent } = useLanguageModel(pageData.login);
	const [data, setData] = useState(pageContent);

	const [number, setNumber] = useState("");
	const [numberError, setNumberError] = useState(false);
	const [numberDisabled, setNumberDisabled] = useState(false);
	const [showNumberAffix, setShowNumberAffix] = useState(false);

	useEffect(() => {
		setData(pageContent);
	}, [pageContent]);

	const handleNumber = (number) => {
		setNumber(number);
	};

	return (
		<View style={styles.loginView}>
			<Text style={styles.pageTitle}>{data.pageTitle}</Text>
			<Image source={data.pageImage} style={styles.pageImage} />
			<CustomTextInput
				label={data.mobilePlaceholder}
				onChangeText={handleNumber}
				error={numberError}
				disabled={numberDisabled}
				type="number"
				affix={data?.changeNumberText}
				showAffix={showNumberAffix}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	loginView: {
		...globalStyles.pageBG,

		flex: 1,
		paddingHorizontal: SIZES.screenPadding,
		paddingTop: 36,
	},

	pageTitle: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 24,
	},

	pageImage: {
		alignSelf: "center",
		resizeMode: "contain",
		height: 180,
		aspectRatio: 1,

		marginVertical: 64,
	},
});

export default LoginScreen;
