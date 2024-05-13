module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"react-native-paper/babel",
			[
				"module-resolver",
				{
					// Also add these aliases to jsconfig.json file for intellisense to use dynamic imports
					alias: {
						"^@assets/(.+)": "./assets/\\1",
						"^@redux/(.+)": "./components/redux/\\1",
						"^@utils/(.+)": "./components/tools/utils/\\1",
						"^@hooks/(.+)": "./components/tools/hooks/\\1",
						"^@globalModules/(.+)": "./globalModules/\\1",
						"^@pages/(.+)": "./components/pages/\\1",
						"^@custom/(.+)": "./components/custom/\\1",
					},
				},
			],
		],
	};
};
