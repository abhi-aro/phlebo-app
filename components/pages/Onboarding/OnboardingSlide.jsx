import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const OnboardingSlide = ({ data }) => {
	const { width } = useWindowDimensions();

	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={data.image}
				style={[styles.image, { width, resizeMode: "contain" }]}
			/>

			<View style={{ flex: 0.3 }}>
				<Text style={styles.title}>{data.title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		flex: 0.7,
		justifyContent: "center",
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
