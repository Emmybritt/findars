import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React from "react";
import Container from "./Container";
import { COLORS } from "../constants/COLORS";
import { AntDesign } from "@expo/vector-icons";
import PATH from "../constants/PATH";
import { useNavigation } from "@react-navigation/native";

const CustomSideMenu = ({toggleSideBar}) => {
  const navigation = useNavigation();
  function handleNavigateUser(path) {
    toggleSideBar();
    navigation.navigate(path);
  }
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Container>
        <View style={{
          marginTop: 10,
        }}>
          <Image source={require("../../assets/FINDAR.png")} />
        </View>
        <View
          style={{
            marginTop: 40,
            marginBottom: 27,
          }}
        >
          <Image source={require("../../assets/profilepic.png")} />
          <Text style={styles.userName}>Olorunfemi Praise</Text>
        </View>
        <View
          style={{
            height: "100%",
          }}
        >
          <View>
            {PATH.map((pat, i) => {
              return (
                <TouchableNativeFeedback onPress={() => {
                  handleNavigateUser(pat.to)
                }} key={i}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderTopColor: COLORS.finderGray,
                      borderTopWidth: 1,
                      paddingVertical: 20,
                    }}
                  >
                    <View>{pat.icon}</View>
                    <Text style={styles.text}>{pat.name}</Text>
                  </View>
                </TouchableNativeFeedback>
              );
            })}
          </View>
          <View style={{marginTop: 50}}>
          <TouchableNativeFeedback>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 20,
                    }}
                  >
                    <View><AntDesign name="logout" size={24} color="white" /></View>
                    <Text style={styles.text}>Logout</Text>
                  </View>
                </TouchableNativeFeedback>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default CustomSideMenu;

const styles = StyleSheet.create({
  userName: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: 19.2,
    lineHeight: 22.5,
    marginTop: 10,
  },
  text: {
    color: COLORS.white,
    fontSize: 13,
    marginLeft: 10,
  },
});
