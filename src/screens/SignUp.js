import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { COLORS } from "../constants/COLORS";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({
    password: "Password should contain at least 8 characters",
  });
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value === "") {
      setErrors((prevErrors) => {
        return { ...prevErrors, [name]: "This field need to be filled**" };
      });
    } else {
      setErrors((prevErrors) => {
        return { ...prevErrors, [name]: "" };
      });
    }
  };

  const handleSignup = () => {
    if (form.name === "") {
      setErrors((prev) => {
        return { ...prev, name: "Ensure that you enter your name**" };
      });
    }
    if (form.phone_number === "") {
      setErrors((prev) => {
        return {
          ...prev,
          phone_number: "Ensure that you enter your phone number**",
        };
      });
    }
    if (form.email === "") {
      setErrors((prev) => {
        return { ...prev, email: "Ensure that you enter your phone email**" };
      });
    }
    if (form.password === "") {
      setErrors((prev) => {
        return {
          ...prev,
          password: "Ensure that you enter your phone Password**",
        };
      });
    }
  };

  const getDisabledStatus = () => {
    if (
      form.name === "" ||
      form.phone_number === "" ||
      form.email === "" ||
      form.password === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const RegisterFooter = () => {
    return (
      <View>
        <TouchableHighlight style={styles.SocialitesContainer}>
          <View style={styles.Socialites}>
            <Text style={styles.SocialitesText}>Sign Up with Google</Text>
            <Image
              style={styles.SocialitesImg}
              source={require("../../assets/googgle.png")}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.SocialitesContainer}>
          <View style={styles.Socialites}>
            <Text style={styles.SocialitesText}>Sign Up with Google</Text>
            <Image
              style={styles.SocialitesImg}
              source={require("../../assets/logos_facebook.png")}
            />
          </View>
        </TouchableHighlight>
        <View style={styles.accountTextContainer}>
          <Text style={styles.accountText}>Already have an account? </Text>
          <TouchableHighlight underlayColor={"BLUE"}  onPress={() => {
            navigation.navigate("signin")
          }}>
            <Text style={[styles.accountText, { color: COLORS.purple }]}>
              Sign In
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: Platform.OS === "ios" ? 20 : 50,
          paddingTop: 10,
        }}
      >
        <View>
          <Text style={styles.HeaderText}>Register</Text>
        </View>
        <View>
          {/* Name Field */}
          <CustomInput
            error={errors.name}
            label="Name"
            placeholder="Name"
            onChangeText={(value) => onChange({ name: "name", value })}
          />
          {/* Phone number Field */}
          <CustomInput
          keyboardType="phone-pad"
            error={errors.phone_number}
            label="Phone Number"
            placeholder="+17016588973"
            onChangeText={(value) => onChange({ name: "phone_number", value })}
          />
          {/* Email Field */}
          <CustomInput
            error={errors.email}
            label="Email"
            placeholder="info@gmail.com"
            onChangeText={(value) => onChange({ name: "email", value })}
          />
          {/* Password Field */}
          <CustomInput
            secureTextEntry={showPassword}
            error={errors.password}
            label="Password"
            placeholder="Your password"
            onChangeText={(value) => onChange({ name: "password", value })}
            iconRight={
              <Ionicons
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
                name={showPassword ? "eye" : "eye-off"}
                size={23}
                color={COLORS.purple}
              />
            }
          />

          <View
            style={{
              marginTop: 10,
            }}
          >
            <CustomButton
              disabled={getDisabledStatus()}
              onPress={handleSignup}
              title="Sign Up"
            />
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>
          <RegisterFooter />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  HeaderText: {
    textAlign: "center",
    color: COLORS.purple,
    lineHeight: 27,
    fontSize: 23.04,
    fontWeight: "500",
  },
  orContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  line: {
    borderWidth: 0.5,
    flexDirection: "row",
    width: "43%",
    borderColor: COLORS.purple,
  },
  orText: {
    paddingHorizontal: 15,
  },
  SocialitesContainer: {
    marginVertical: 9,
  },
  Socialites: {
    borderColor: COLORS.purple,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 6,
  },
  SocialitesImg: {
    marginLeft: 16,
  },
  SocialitesText: {
    color: COLORS.purple,
    fontSize: 16,
  },
  accountTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  accountText: {
    fontSize: 13.33,
    fontWeight: "400",
  },
});
