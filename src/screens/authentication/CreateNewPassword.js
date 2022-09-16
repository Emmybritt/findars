import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";
import SuccessScreen from "../../components/SuccessScreen";
import { useNavigation } from "@react-navigation/native";

const CreateNewPassword = () => {
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [shouldShow, setShow] = useState(false);

  const navigation = useNavigation()

  function handleTogglePassword() {
    setShowPassword((prev) => !prev);
  }
  function handleTogglePassword2() {
    setShowPassword2((prev) => !prev);
  }

  function getDisabledStatus() {}
  function handleCreateNewPassword() {
    setLoading(true);
    setShow(true);
    setTimeout(() => {
      setLoading(false);
      setShow(false);
      navigation.navigate("verify-phone-number")
    }, 800);
  }
  function onChange() {}
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: Platform.OS === "ios" ? 20 : 50,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            marginBottom: 44,
            marginTop: 10,
          }}
        >
          <Image source={require("../../../assets/FINDARlogo.png")} />
        </View>
        <View>
          <Text style={styles.HeaderText}>Create New Password</Text>
        </View>

        <View>
          {/* Name Field */}
          <CustomInput
            style={{
              paddingVertical: 6,
            }}
            secureTextEntry={showPassword2}
            label="New Password"
            // error={errors.name}
            iconRight={
              <Ionicons
                onPress={handleTogglePassword}
                name={showPassword ? "eye" : "eye-off"}
                size={23}
                color={COLORS.purple}
              />
            }
            placeholder="***********"
            onChangeText={(value) => onChange({ name: "name", value })}
          />
          <CustomInput
            style={{
              paddingVertical: 6,
            }}
            secureTextEntry={showPassword2}
            label="Confirm Password"
            // error={errors.name}
            iconRight={
              <Ionicons
                onPress={handleTogglePassword2}
                name={showPassword2 ? "eye" : "eye-off"}
                size={23}
                color={COLORS.purple}
              />
            }
            placeholder="***********"
            onChangeText={(value) => onChange({ name: "name", value })}
          />

          <View
            style={{
              marginTop: 10,
            }}
          >
            <CustomButton
              disabled={getDisabledStatus()}
              onPress={handleCreateNewPassword}
              title={isLoading ? "Please wait.." : "Create New Password"}
            />
          </View>
          {/* <LoginFooter /> */}
        </View>
      </ScrollView>
      {shouldShow && <SuccessScreen title={"Password created successfully"} />}
      
    </Container>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  HeaderText: {
    textAlign: "center",
    color: COLORS.purple,
    lineHeight: 27,
    fontSize: 23.04,
    fontWeight: "500",
    marginVertical: 20,
  },
});
