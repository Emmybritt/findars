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
import Container from "../../components/Container";
import CustomInput from "../../components/CustomInput";
import { COLORS } from "../../constants/COLORS";
import CustomButton from "../../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value === "") {
      setErrors((prevErrors) => {
        return {...prevErrors, [name]: "This field need to be filled**"}
      })
    }else{
      setErrors((prevErrors) => {
        return {...prevErrors, [name]: ""}
      })
    }
  };

  const handleSignup = () => {
    if (!form.name) {
      setErrors((prev) => {
        return {...prev, name: "Ensure that you enter your name**"}
      })
    }

    if (!form.password) {
      setErrors((prev) => {
        return {...prev, password: "Ensure that you enter your password**"}
      })
    }

  };
  
  const getDisabledStatus = () => {
    if (isLoading) {
      return true;
    }else{
      return false;
    }
  }

  const LoginFooter = () => {
    return (
      <View>
        <TouchableHighlight style={styles.SocialitesContainer}>
          <View style={styles.Socialites}>
            <Text style={styles.SocialitesText}>Sign Up with Google</Text>
            <Image style={styles.SocialitesImg} source={require("../../../assets/googgle.png")} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.SocialitesContainer}>
          <View style={styles.Socialites}>
            <Text style={styles.SocialitesText}>Sign In with Facebook</Text>
            <Image style={styles.SocialitesImg} source={require("../../../assets/logos_facebook.png")} />
          </View>
        </TouchableHighlight>
        <View style={styles.accountTextContainer}>
          <Text style={styles.accountText}>Don’t have an account? </Text>
          <TouchableHighlight onPress={() => {
            navigation.navigate("Signup")
          }}>
            <Text style={[styles.accountText, {color: COLORS.purple}]}>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={{
        marginTop: Platform.OS === 'ios' ? 20 : 50,
        paddingTop: 10,
      }}>
        <View>
          <Text style={styles.HeaderText}>Sign In</Text>
        </View>
        <View>
          {/* Name Field */}
          <CustomInput
            error={errors.name}
            label="Email or Phone Number"
            placeholder="Name"
            onChangeText={(value) => onChange({ name: "name", value })}
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
            <CustomButton disabled={getDisabledStatus()} onPress={handleSignup} title={isLoading ? "Please wait.." : "Sign In"} />
            <TouchableHighlight onPress={() => navigation.navigate("forgot-password")} underlayColor={"BLUE"} style={{
              alignSelf: 'flex-end',
            }}>
              <Text style={{
                lineHeight: 15,
                fontSize: 11.11,
                marginTop: 4,
              }}>Forgot password?</Text>
            </TouchableHighlight>
            
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>
          <LoginFooter />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Signin;

const styles = StyleSheet.create({
  HeaderText: {
    textAlign: "center",
    color: COLORS.purple,
    lineHeight: 27,
    fontSize: 23.04,
    fontWeight: "500",
    marginVertical: 20,
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  accountText: {
    fontSize: 13.33,
    fontWeight: '400'
  }
});
