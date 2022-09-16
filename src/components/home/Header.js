import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = ({ ToggleSideBar }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ToggleSideBar}>
        <View style={styles.profile}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assets/user.png")}
          />
          <Text style={styles.text}>Hi, Praise</Text>
        </View>
      </TouchableOpacity>
      <Image source={require("../../../assets/Vectornotify.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 12 : 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginRight: 10,
  },
  text: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "400",
  },
});
