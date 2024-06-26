import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import AppNavigation from "@globalModules/AppNavigation";
import globalStyles from "@globalModules/GlobalStyles";

import store from "@redux/store/store";

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider>
				<SafeAreaView style={globalStyles.body}>
					<StatusBar
						backgroundColor="white"
						barStyle="dark-content"
					/>
					<NavigationContainer>
						<AppNavigation />
					</NavigationContainer>
				</SafeAreaView>
			</PaperProvider>
		</Provider>
	);
}
