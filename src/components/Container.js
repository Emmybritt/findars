import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Container = ({ children }) => {
  return (
    <SafeAreaView>
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
