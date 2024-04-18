import React from "react";
import { Button, Text, View } from "react-native";
import useOnboardingStatus from "../../tools/hooks/useOnboardingStatus";

const HomeScreen = () => {
	const { removeOnboarding } = useOnboardingStatus();

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Welcome back!</Text>
			<Button onPress={removeOnboarding} title="logout" />
		</View>
	);
};

export default HomeScreen;
