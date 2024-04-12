import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import HomeScreen from "./components/Home/HomeScreen";
import WelcomeScreen from "./components/Welcome/WelcomeScreen";

import { getAsyncStorage, setAsyncStorage } from "./utils/AsyncStorage";

const Stack = createNativeStackNavigator();

export default function App() {
	const [isFirstLoad, setIsFirstLoad] = useState(null);

	useEffect(() => {
		getAsyncStorage("firstLoad")
			.then((value) => {
				if (value) {
					setIsFirstLoad(false);
				} else {
					setIsFirstLoad(true);
					setAsyncStorage("firstLoad", true);
				}
			})
			.catch((err) => {
				setIsFirstLoad(true);
				setAsyncStorage("firstLoad", true);
			});
	}, []);

	if (isFirstLoad === null) return <></>;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isFirstLoad === false ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : null}
				{isFirstLoad === true ? (
					<Stack.Screen name="Welcome" component={WelcomeScreen} />
				) : null}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
