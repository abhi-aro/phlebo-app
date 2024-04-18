import React from "react";
import { Button, Text, View } from "react-native";
import useOnboardingStatus from "../../tools/hooks/useOnboardingStatus";

const WelcomeScreen = () => {
	const { addOnboarding } = useOnboardingStatus();

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Welcome to the app!</Text>
			<Button onPress={addOnboarding} title="sign up" />
		</View>
	);
};

export default WelcomeScreen;
