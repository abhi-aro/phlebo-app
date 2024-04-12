import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAsyncStorage = async (key, defaultValue = null) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value !== null ? JSON.parse(value) : defaultValue;
	} catch (error) {
		console.error("Error retrieving data from AsyncStorage:", error);
		return defaultValue;
	}
};

export const setAsyncStorage = async (key, value) => {
	try {
		const serializedValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, serializedValue);
	} catch (error) {
		console.error("Error saving data to AsyncStorage:", error);
	}
};

export const removeAsyncStorage = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.error("Error removing data from AsyncStorage:", error);
	}
};
