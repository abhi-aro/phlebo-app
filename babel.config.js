module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"^@assets/(.+)": "./assets/\\1",
						"^@utils/(.+)": "./components/tools/utils/\\1",
						"^@hooks/(.+)": "./components/tools/hooks/\\1",
						// '^@components/(.+)': './components/\\1',
					},
				},
			],
		],
	};
};
