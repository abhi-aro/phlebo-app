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

	whiteBG: {
		backgroundColor: "white",
	},

	textPrimary: {
		fontSize: 16,
		lineHeight: 16,
		fontWeight: "500",
		color: COLORS.primaryColor,
	},

	textSecondary: {
		fontSize: 16,
		lineHeight: 16,
		fontWeight: "500",
		color: COLORS.secondaryColor,
	},

	textTernary: {
		fontSize: 12,
		lineHeight: 12,
		fontWeight: "400",
		color: COLORS.ternaryColor,
	},

	buttonPrimary: {
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: COLORS.primaryBackground,
	},

	buttonSecondary: {
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: COLORS.secondaryBackground,
	},

	buttonTernary: {
		borderRadius: 12,
		paddingVertical: 8,
		paddingHorizontal: 24,
		backgroundColor: COLORS.ternaryBackground,
	},
});

export default globalStyles;
