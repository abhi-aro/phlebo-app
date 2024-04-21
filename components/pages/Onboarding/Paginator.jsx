import React from "react";
import {
	Animated,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from "react-native";

import globalStyles, { COLORS } from "@globalModules/GlobalStyles";
import useLanguageModel from "@hooks/useLanguageModel";

const pageData = ["Onboarding", "slides"];

export default function Paginator({ data, scrollX, scrollTo }) {
	const { width } = useWindowDimensions();
	const { pageContent } = useLanguageModel(pageData);

	return (
		<View style={styles.paginatorContainer}>
			<TouchableOpacity onPress={() => scrollTo(-1)}>
				<Text style={styles.backButton}>{pageContent.backText}</Text>
			</TouchableOpacity>
			<View style={{ flexDirection: "row" }}>
				{data.map((_, i) => {
					const inputRange = [
						(i - 1) * width,
						i * width,
						(i + 1) * width,
					];

					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [0.15, 1, 0.15],
						extrapolate: "clamp",
					});

					return (
						<Animated.View
							style={[styles.dot, { opacity }]}
							key={i.toString()}
						/>
					);
				})}
			</View>
			<TouchableOpacity onPress={() => scrollTo(1)}>
				<Text style={[styles.nextButton]}>{pageContent.nextText}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	dot: {
		height: 8,
		width: 18,

		borderRadius: 4,
		backgroundColor: COLORS.primaryBackground,
		marginHorizontal: 4,
	},

	paginatorContainer: {
		flexDirection: "row",

		alignSelf: "stretch",
		alignItems: "center",
		justifyContent: "space-between",

		paddingHorizontal: 32,
		marginBottom: 40,
	},

	backButton: {
		...globalStyles.buttonSecondary,
	},

	nextButton: {
		...globalStyles.buttonPrimary,
	},
});
