import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import useLanguageModel from "@hooks/useLanguageModel";

export default function Paginator({ pageData, data, scrollX, scrollTo }) {
	const { width } = useWindowDimensions();
	const { pageContent } = useLanguageModel(pageData);

	return (
		<View style={styles.paginatorContainer}>
			<TouchableOpacity
				style={styles.paginatorButtonContainer}
				onPress={() => scrollTo(-1)}
			>
				<Text style={styles.paginatorButton}>
					{pageContent.backText}
				</Text>
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
			<TouchableOpacity
				style={styles.paginatorButtonContainer}
				onPress={() => scrollTo(1)}
			>
				<Text style={[styles.paginatorButton, styles.nextButton]}>
					{pageContent.nextText}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	dot: {
		height: 8,
		width: 18,

		borderRadius: 4,
		backgroundColor: "#28A891",
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

	paginatorButtonContainer: {
		width: 88,
		height: 42,
	},

	paginatorButton: {
		fontSize: 16,
		lineHeight: 16,
		fontWeight: "500",
		textAlign: "center",

		color: "#ADABAB",
		backgroundColor: "#F2F2F2",

		borderRadius: 12,
		paddingHorizontal: 24,
		paddingVertical: 12,
	},

	nextButton: {
		color: "#ffffff",
		backgroundColor: "#28A891",
	},
});
