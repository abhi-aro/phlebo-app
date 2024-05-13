import { Ionicons } from "@expo/vector-icons";
import globalStyles, { COLORS, SIZES } from "@globalModules/GlobalStyles";
import useLanguageModel, { pageData } from "@hooks/useLanguageModel";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from "react-native";
import { useSelector } from "react-redux";

const LanugageSelection = () => {
	const { pageContent, languageList } = useLanguageModel(pageData.language);
	const { language } = useSelector((state) => state.userData);

	const navigation = useNavigation();

	const [selected, setSelected] = useState(language);
	const [data, setData] = useState(pageContent);
	const [languages, setLanguages] = useState(languageList);

	useEffect(() => {
		setData(pageContent);
		setLanguages(languageList);
	}, [pageContent]);

	const chooseLanguage = () => {
		navigation.navigate("login");
	};

	return (
		<View style={styles.languageSelectionView}>
			<View style={styles.pageTitle}>
				<Text style={styles.primaryTitle}>{data?.primaryTitle}</Text>
				<Text style={styles.secondaryTitle}>
					{data?.secondaryTitle}
				</Text>
			</View>

			<View style={styles.languageList}>
				{languages.map((item) => (
					<LanguageCard
						key={item.id}
						data={item}
						selected={selected}
						setSelected={setSelected}
					/>
				))}
			</View>

			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={chooseLanguage}
			>
				<Text style={[styles.continueButton]}>{data.buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
};

const LanguageCard = ({ data, selected, setSelected }) => {
	const { width } = useWindowDimensions();
	const { updateLanguage } = useLanguageModel();

	const chooseLanguage = () => {
		setSelected(data?.key);
		updateLanguage(data?.key);
	};

	return (
		<TouchableOpacity
			onPress={chooseLanguage}
			style={[
				styles.languageCard,
				{ width: width / 2 - (SIZES.screenPadding + 12) },
			]}
		>
			<View style={styles.languageName}>
				<Text>{data?.value}</Text>

				<Ionicons
					name="checkbox"
					size={24}
					color={
						selected === data?.key
							? COLORS.primaryBackground
							: "transparent"
					}
				/>
			</View>
			<Text style={styles.languageIdentifier}>{data?.identifier}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	languageSelectionView: {
		...globalStyles.centered,
		...globalStyles.pageBG,
		alignItems: "flex-start",
		paddingHorizontal: SIZES.screenPadding,
		rowGap: 54,
	},

	primaryTitle: {
		fontFamily: "Poppins_600SemiBold",
		color: COLORS.textColor,
		fontSize: 24,
	},

	secondaryTitle: {
		color: COLORS.textColor,
		fontSize: 24,
	},

	languageList: {
		flex: 1,
		alignSelf: "stretch",
		flexWrap: "wrap",
		flexDirection: "row",
		gap: 24,
	},

	languageCard: {
		backgroundColor: "#f9f9f9",
		padding: 10,
		borderRadius: 16,
		alignItems: "center",

		...Platform.select({
			ios: {
				shadowColor: "#000000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.4,
				shadowRadius: 20,
			},
			android: {
				elevation: 8,
			},
		}),
	},

	languageName: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},

	languageIdentifier: {
		fontFamily: "Poppins_400Regular",
		fontSize: 28,
		padding: 10,
	},

	buttonContainer: {
		alignSelf: "stretch",
		marginBottom: 42,
	},

	continueButton: {
		...globalStyles.buttonPrimary,
		textAlign: "center",
	},
});

export default LanugageSelection;
