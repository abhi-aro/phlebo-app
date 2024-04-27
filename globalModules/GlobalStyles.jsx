import { StyleSheet } from "react-native";

const COLORS = {
	primaryBackground: "#28A891",
	secondaryBackground: "#F2F2F2",
	ternaryBackground: "#EBEBEB",

	primaryColor: "#ffffff",
	secondaryColor: "#ADABAB",
	ternaryColor: "#666666",

	textColor: "#333333",
};

const SIZES = {
	screenPadding: 18,
};

export { COLORS, SIZES };

const globalStyles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "white",
	},

	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	pageBG: {
		backgroundColor: "white",
	},

	buttonPrimary: {
		fontFamily: "Poppins_500Medium",
		fontSize: 16,
		color: COLORS.primaryColor,

		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: COLORS.primaryBackground,
	},

	buttonSecondary: {
		fontFamily: "Poppins_500Medium",
		fontSize: 16,
		color: COLORS.secondaryColor,

		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: COLORS.secondaryBackground,
	},

	buttonTernary: {
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
		color: COLORS.ternaryColor,

		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 24,
		backgroundColor: COLORS.ternaryBackground,
	},
});

export default globalStyles;
