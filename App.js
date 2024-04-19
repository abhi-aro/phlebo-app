import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";

import store from "./components/redux/store/store";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
				<StatusBar backgroundColor="white" barStyle="dark-content" />
				<NavigationContainer>
					<AppNavigation />
				</NavigationContainer>
			</SafeAreaView>
		</Provider>
	);
}
