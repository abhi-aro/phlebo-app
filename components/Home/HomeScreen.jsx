import React from "react";
import { Button, Text, View } from "react-native";
import { removeAsyncStorage } from "../../utils/AsyncStorage";

const HomeScreen = () => {
	const clearStorage = () => {
		removeAsyncStorage("firstLoad");
	};

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Welcome back!</Text>
			<Button onPress={clearStorage} title="clear storage" />
		</View>
	);
};

export default HomeScreen;
