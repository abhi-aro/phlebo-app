import React, { useRef, useState } from "react";
import {
	Animated,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import OnboardingSlide from "./OnboardingSlide";
import Paginator from "./Paginator";

import globalStyles from "@globalModules/GlobalStyles";
import useLanguageModel from "@hooks/useLanguageModel";

const pageData = ["Onboarding", "slides"];

const Onboarding = () => {
	const { pageContent } = useLanguageModel(pageData);

	const [currentIndex, setCurrentIndex] = useState(0);

	const slidesRef = useRef(null);
	const scrollX = useRef(new Animated.Value(0)).current;
	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0]?.index);
	}).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const skip = () => {};

	const scrollTo = (scrollBy = 1) => {
		const lastSlide = pageContent.slidesList.length - 1;

		if (scrollBy < 0 && currentIndex > 0) {
			slidesRef.current.scrollToIndex({ index: currentIndex + scrollBy });
		}

		if (scrollBy > 0 && currentIndex < lastSlide) {
			slidesRef.current.scrollToIndex({ index: currentIndex + scrollBy });
		}

		if (scrollBy > 0 && currentIndex === lastSlide) {
			skip();
		}
	};

	return (
		<View style={styles.onboardingView}>
			<TouchableOpacity
				style={[
					styles.skipButtonContainer,
					{
						opacity:
							currentIndex === pageContent.slidesList.length - 1
								? 0
								: 1,
					},
				]}
				disabled={currentIndex === pageContent.slidesList.length - 1}
				onPress={skip}
			>
				<Text style={styles.skipButton}>{pageContent.skipText}</Text>
			</TouchableOpacity>

			<View style={{ flex: 3 }}>
				<FlatList
					data={pageContent.slidesList}
					renderItem={({ item }) => <OnboardingSlide data={item} />}
					keyExtractor={(item) => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{
							useNativeDriver: false,
						}
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef}
				/>
			</View>

			<Paginator
				data={pageContent.slidesList}
				scrollX={scrollX}
				scrollTo={scrollTo}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	onboardingView: {
		...globalStyles.centered,
		...globalStyles.whiteBG,
	},

	skipButtonContainer: {
		alignSelf: "flex-end",

		marginTop: 40,
		marginRight: 32,
	},

	skipButton: {
		...globalStyles.textTernary,
		...globalStyles.buttonTernary,
	},
});

export default Onboarding;
