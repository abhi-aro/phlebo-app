import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const checkType = (type) => {
	switch (type) {
		case "number":
			return "phone-pad";

		default:
			return "default";
	}
};

const CustomizedTextInput = (props) => {
	const { type, affix, showAffix } = props;

	const keyboardType = checkType(type);

	return (
		<TextInput
			mode="outlined"
			style={styles.input}
			keyboardType={keyboardType}
			outlineStyle={styles.borderStyle}
			activeOutlineColor="#ADABAB"
			textColor="#666666"
			right={
				showAffix && (
					<TextInput.Affix
						text={affix}
						textStyle={styles.affixStyle}
					/>
				)
			}
			{...props}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		paddingVertical: 10,
		backgroundColor: "#ffffff",
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
	},
	borderStyle: {
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#cccccc",
	},
	affixStyle: {
		color: "#0803FF",
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
		paddingTop: 24,
	},
});

export default CustomizedTextInput;
