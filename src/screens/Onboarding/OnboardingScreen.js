import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { onBoardingITem } from "../../utilities/OnboardingItem";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/COLORS";

const Slide = ({ item, windowHeight, windowWidth }) => {
  return (
    <View
      style={{
        width: windowWidth,
        alignItems: "center",
      }}
    >
      <View>
        <Image source={item.image} />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            lineHeight: 24,
            fontSize: 16,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const OnboardingScreen = () => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("screen").height
  );
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("screen").width
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigation = useNavigation();
  const ref = useRef(null);
  function getJustifyContentVal() {
    if (currentSlideIndex === 0) {
      return "center";
    } else if (currentSlideIndex === 2) {
      return "center";
    }
    {
      return "space-between";
    }
  }

  const Footer = () => {
    return (
      <View
        style={{
          height: windowHeight * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.indicatorContainer}>
          {onBoardingITem.map((_, index) => (
            <LinearGradient
              key={index}
              colors={[
                currentSlideIndex >= index
                  ? ("#FBFF3F",
                    "rgba(146, 91, 189, 0.6631)",
                    "rgba(27, 7, 255, 0.77)")
                  : COLORS.grey,
                "transparent",
              ]}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 0 }}
              style={{
                height: 16,
                width: 16,
                borderRadius: 30,
                marginHorizontal: 10,
              }}
            ></LinearGradient>
          ))}
        </View>
        <View
          style={{
            marginBottom: 70,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: getJustifyContentVal(),
              paddingHorizontal: 40,
            }}
          >
            {currentSlideIndex > 0 && (
              <TouchableOpacity onPress={goBackSlide} style={styles.button}>
                <Image
                  source={require("../../../assets/arrows/arrowleft.png")}
                />
              </TouchableOpacity>
            )}

            {currentSlideIndex <= 1 && (
              <TouchableOpacity onPress={goNextSlide} style={styles.button}>
                <Image
                  source={require("../../../assets/arrows/arrowright.png")}
                />
              </TouchableOpacity>
            )}
          </View>
          {currentSlideIndex === 2 && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signup");
              }}
              style={{
                backgroundColor: COLORS.purple,
                paddingVertical: 15,
                marginTop: 30,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  const OnBoardingHeader = () => {
    return (
      <View style={styles.onBoardingHeader}>
        <Text />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          {currentSlideIndex <= 1 && (
            <Text style={styles.textPurple}>Skip</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    // console.log(efs);
    const contentOffSetX = e.nativeEvent.contentOffset.x;
    // console.log(contentOffSetX);
    const currentIndex = Math.round(contentOffSetX / windowWidth);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * windowWidth;
    ref?.current?.scrollToOffset({ offset: offset });
    setCurrentSlideIndex((prev) => prev + 1);
  };

  const goBackSlide = () => {
    const prevSlideIndex = currentSlideIndex - 1;
    const offset = prevSlideIndex * windowWidth;
    ref?.current?.scrollToOffset({ offset: offset });
    setCurrentSlideIndex((prev) => prev - 1);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: Platform.OS === "android" ? 30 : 0,
        }}
      >
        <OnBoardingHeader />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={onBoardingITem}
          renderItem={({ item }) => (
            <Slide
              windowHeight={windowHeight}
              windowWidth={windowWidth}
              item={item}
            />
          )}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  onBoardingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textPurple: {
    color: COLORS.purple,
    fontSize: 16,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  indicator: {
    height: 16,
    width: 16,
    borderRadius: 30,
    backgroundColor: COLORS.grey,
    marginHorizontal: 3,
  },
  button: {
    backgroundColor: COLORS.purple,
    paddingHorizontal: 11,
    paddingVertical: 12,
    borderRadius: 30,
  },
});
