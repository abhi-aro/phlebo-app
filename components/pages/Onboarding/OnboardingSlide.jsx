import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";

import globalStyles from "@globalModules/GlobalStyles";

const OnboardingSlide = ({ data }) => {
	const { width } = useWindowDimensions();

	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={data.image}
				style={[{ flex: 0.7 }, { width, resizeMode: "contain" }]}
			/>

			<View style={{ flex: 0.3 }}>
				<Text style={styles.title}>{data.title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...globalStyles.centered,
	},
	title: {
		marginHorizontal: 32,

		fontWeight: "600",
		fontSize: 18,
		color: "#333333",
		textAlign: "left",
	},
});

export default OnboardingSlide;
