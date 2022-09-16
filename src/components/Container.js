import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/COLORS";

const Container = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.purple} />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
