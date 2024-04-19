import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

import Home from "../components/pages/Home/Home";
import Onboarding from "../components/pages/Onboarding/Onboarding";

import useOnboardingStatus from "../components/tools/hooks/useOnboardingStatus";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
	const { isUserOnboarded } = useOnboardingStatus();
	const [initialRoute, setInitialRoute] = useState(null);

	useEffect(() => {
		if (isUserOnboarded !== null) {
			setInitialRoute(isUserOnboarded ? "Home" : "Onboarding");
		}
	}, [isUserOnboarded]);

	if (initialRoute === null) return null;

	return (
		<Stack.Navigator initialRouteName={initialRoute}>
			<Stack.Screen
				name="Onboarding"
				component={Onboarding}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
