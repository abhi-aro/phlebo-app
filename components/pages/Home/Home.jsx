import React from "react";
import { Text, View } from "react-native";

import globalStyles from "@globalModules/GlobalStyles";

const HomeScreen = () => {
	return (
		<View style={globalStyles.centered}>
			<Text>Home page</Text>
		</View>
	);
};

export default HomeScreen;
