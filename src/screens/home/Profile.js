import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";
import Container from "../../components/Container";
import { useNavigation } from "@react-navigation/native";
import UserProfileComponent from "../../components/UserProfileComponent";

const Profile = () => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("screen").height
  );
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("screen").width
  );
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.purple,
          height: windowHeight / 3.5,
          position: "relative",
        }}
      >
        <Container>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="ios-arrow-back-circle-sharp"
                size={28}
                color="white"
              />
              <Text style={styles.profileText}>My Profile</Text>
            </View>
          </TouchableNativeFeedback>
        </Container>
        <View
          style={{
            backgroundColor: "white",
            width: "85%",
            height: "60%",
            position: "absolute",
            bottom: -40,
            alignSelf: "center",
            borderRadius: 15,
          }}
        >
          <Image
            style={{
              alignSelf: "center",
              marginTop: -30,
            }}
            source={require("../../../assets/pic.png")}
          />
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={[
                {
                  color: COLORS.purple,
                },
                styles.text,
              ]}
            >
              Olorunfemi Praise
            </Text>
            <Text style={[styles.text, { fontSize: 18.75, marginTop: 8 }]}>
              Personal Information
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <UserProfileComponent />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileText: {
    color: "white",
    fontWeight: "500",
    fontSize: 19.2,
    marginLeft: 8,
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 19.2,
  },
});
