import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";

import { Provider } from "react-redux";
import store from "./components/redux/store/store";

import Home from "./components/pages/Home/Home";
import Welcome from "./components/pages/Welcome/Welcome";

import useOnboardingStatus from "./components/tools/hooks/useOnboardingStatus";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<AppComponent />
		</Provider>
	);
}

function AppComponent() {
	const { isUserOnboarded, isLoading } = useOnboardingStatus();
	if (isUserOnboarded === null) return <></>;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<NavigationContainer>
				<Stack.Navigator>
					{isUserOnboarded === true ? (
						<Stack.Screen
							name="Home"
							component={Home}
							options={{
								headerShown: false,
							}}
						/>
					) : null}
					{isUserOnboarded === false ? (
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={{
								headerShown: false,
							}}
						/>
					) : null}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}
