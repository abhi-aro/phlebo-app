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

//! Warning do not move this to a different line
import useLanguageModel from "@hooks/useLanguageModel";

const pageData = ["Onboarding", "slides"];

const Onboarding = () => {
	const { pageContent } = useLanguageModel(pageData);

	const [slides, setSlides] = useState(pageContent.slidesList);
	const [currentIndex, setCurrentIndex] = useState(0);

	const slidesRef = useRef(null);
	const scrollX = useRef(new Animated.Value(0)).current;
	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0]?.index);
	}).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const skip = () => {};

	const scrollTo = (scrollBy = 1) => {
		const lastSlide = slides.length - 1;

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
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
			}}
		>
			<TouchableOpacity
				style={[
					styles.skipButtonContainer,
					{
						opacity: currentIndex === slides.length - 1 ? 0 : 1,
					},
				]}
				disabled={currentIndex === slides.length - 1}
				onPress={skip}
			>
				<Text style={styles.skipButton}>{pageContent.skipText}</Text>
			</TouchableOpacity>

			<View style={{ flex: 3 }}>
				<FlatList
					data={slides}
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
				pageData={pageData}
				data={slides}
				scrollX={scrollX}
				scrollTo={scrollTo}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	skipButtonContainer: {
		alignSelf: "flex-end",

		marginTop: 40,
		marginRight: 32,

		width: "auto",
		height: 32,
	},

	skipButton: {
		fontSize: 12,
		lineHeight: 12,
		fontWeight: "400",
		color: "#666666",
		textAlign: "center",

		backgroundColor: "#ebebeb",
		borderRadius: 12,
		paddingHorizontal: 24,
		paddingVertical: 8,
	},
});

export default Onboarding;
