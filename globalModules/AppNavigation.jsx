import {
	Poppins_100Thin,
	Poppins_100Thin_Italic,
	Poppins_200ExtraLight,
	Poppins_200ExtraLight_Italic,
	Poppins_300Light,
	Poppins_300Light_Italic,
	Poppins_400Regular,
	Poppins_400Regular_Italic,
	Poppins_500Medium,
	Poppins_500Medium_Italic,
	Poppins_600SemiBold,
	Poppins_600SemiBold_Italic,
	Poppins_700Bold,
	Poppins_700Bold_Italic,
	Poppins_800ExtraBold,
	Poppins_800ExtraBold_Italic,
	Poppins_900Black,
	Poppins_900Black_Italic,
	useFonts,
} from "@expo-google-fonts/poppins";

import useOnboardingStatus from "@hooks/useOnboardingStatus";
import LoginScreen from "@pages/Auth/Login";
import Home from "@pages/Home/Home";
import LanugageSelection from "@pages/Onboarding/LanugageSelection";
import Onboarding from "@pages/Onboarding/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function AppNavigation() {
	const { isUserOnboarded } = useOnboardingStatus();
	const [initialRoute, setInitialRoute] = useState(null);

	const [fontsLoaded, fontError] = useFonts({
		Poppins_100Thin,
		Poppins_100Thin_Italic,
		Poppins_200ExtraLight,
		Poppins_200ExtraLight_Italic,
		Poppins_300Light,
		Poppins_300Light_Italic,
		Poppins_400Regular,
		Poppins_400Regular_Italic,
		Poppins_500Medium,
		Poppins_500Medium_Italic,
		Poppins_600SemiBold,
		Poppins_600SemiBold_Italic,
		Poppins_700Bold,
		Poppins_700Bold_Italic,
		Poppins_800ExtraBold,
		Poppins_800ExtraBold_Italic,
		Poppins_900Black,
		Poppins_900Black_Italic,
	});

	useEffect(() => {
		(async () => {
			if (isUserOnboarded !== null) {
				setInitialRoute(isUserOnboarded ? "Home" : "Onboarding");

				if (fontsLoaded || fontError) {
					SplashScreen.hideAsync();
				}
			}
		})();
	}, [isUserOnboarded, fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError && initialRoute === null) return null;

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
			<Stack.Screen
				name="language"
				component={LanugageSelection}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="login"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
