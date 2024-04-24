import { StyleSheet } from "react-native";

const COLORS = {
	primaryBackground: "#28A891",
	secondaryBackground: "#F2F2F2",
	ternaryBackground: "#EBEBEB",

	primaryColor: "#ffffff",
	secondaryColor: "#ADABAB",
	ternaryColor: "#666666",
};

export { COLORS };

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
		fontSize: 16,
		lineHeight: 16,
		fontWeight: "500",
		color: COLORS.primaryColor,

		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: COLORS.primaryBackground,
	},

	buttonSecondary: {
		fontSize: 16,
		lineHeight: 16,
		fontWeight: "500",
		color: COLORS.secondaryColor,

		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: COLORS.secondaryBackground,
	},

	buttonTernary: {
		fontSize: 12,
		lineHeight: 12,
		fontWeight: "400",
		color: COLORS.ternaryColor,

		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 24,
		backgroundColor: COLORS.ternaryBackground,
	},
});

export default globalStyles;
