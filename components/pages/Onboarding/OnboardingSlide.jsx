import globalStyles, { COLORS } from "@globalModules/GlobalStyles";
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

		fontFamily: "Poppins_600SemiBold",
		fontSize: 18,
		color: COLORS.textColor,
		textAlign: "left",
	},
});

export default OnboardingSlide;
