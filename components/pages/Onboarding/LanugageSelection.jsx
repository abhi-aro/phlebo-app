import { StyleSheet, Text, View } from "react-native";

import globalStyles from "@globalModules/GlobalStyles";

const LanugageSelection = () => {
	return (
		<View style={styles.languageSelectionView}>
			<View style={styles.pageTitle}>
				<Text style={styles.customFont}>test</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	languageSelectionView: {
		...globalStyles.centered,
		...globalStyles.pageBG,
	},
	customFont: {
		fontFamily: "Poppins_900Black_Italic",
	},
});

export default LanugageSelection;
