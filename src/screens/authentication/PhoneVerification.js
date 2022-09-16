import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Container from '../../components/Container'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants/COLORS'
import SuccessScreen from '../../components/SuccessScreen'

const PhoneVerification = () => {

  const [isLoading, setLoading] = useState();
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [shouldShow, setShow] = useState(false);

  const navigation = useNavigation();

  function handleVerifyNumber() {
    setLoading(true);
    setShow(true);
    setTimeout(() => {
    setLoading(false);
    setShow(false);
    navigation.navigate("home-screen")
    }, 800);
  }
  function getDisabledStatus() {
    
  }



  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  function handleUnBlur() {

  }
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
          <Text style={styles.HeaderText}>Verify It Is You</Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13.33,
              lineHeight: 19,
              marginHorizontal: 30,
            }}
          >
            Input the four-digit code send to your phone number 
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 60,
              marginBottom: 40,
              justifyContent: 'center'
            }}
          >
            <View style={styles.otpInputContainer}>
              <TextInput returnKeyType="done" textContentType="oneTimeCode" onBlur={handleUnBlur} maxLength={1} ref={pin1Ref} onChangeText={(pin1) =>{
                setPin1(pin1);
                if (pin1 !== "") {
                  pin2Ref.current.focus();
                }
              }} keyboardType="number-pad" style={styles.otpInput} />
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput maxLength={1} ref={pin2Ref} keyboardType="number-pad" style={styles.otpInput} onChange={(pin2) => {
                setPin2(pin2);
                if (pin2 !== "") {
                  pin3Ref.current.focus();
                }else{
                  pin1Ref.current.focus()
                }
              }} />
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput maxLength={1} ref={pin3Ref} onChange={(pin3) => {
                setPin3(pin3);
                if (pin3 != "") {
                  pin4Ref.current.focus()
                }else{
                  pin2Ref.current.focus()
                }
              }} keyboardType="number-pad" style={styles.otpInput} />
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput onChange={(pin4) => {
                setPin4(pin4);
                if (pin4 !== "") {
                  pin4Ref.current.focus()
                }
              }} maxLength={1} ref={pin4Ref} keyboardType="number-pad" style={styles.otpInput} />
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
            }}
          >
            <CustomButton
              disabled={getDisabledStatus()}
              onPress={handleVerifyNumber}
              title={isLoading ? "Please wait..." : "Verify"}
            />
            <Text style={styles.lastText}>Resend verification Code</Text>
          </View>
          {/* <LoginFooter /> */}
        </View>
      </ScrollView>
      {shouldShow && (
        <SuccessScreen title={"Verification Successfull"} />
      )}
    </Container>
  )
}

export default PhoneVerification

const styles = StyleSheet.create({
  HeaderText: {
    textAlign: "center",
    color: COLORS.purple,
    lineHeight: 27,
    fontSize: 23.04,
    fontWeight: "500",
    marginVertical: 20,
  },
  otpInputContainer: {
    borderWidth: .2,
    borderColor: COLORS.purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    borderRadius: 4,
  },
  otpInput: {
    // borderWidth: 1,
    // borderColor: COLORS.purple,
    textAlign: 'center',
    height: 43,
    fontSize: 16,
    // fontWeight: "500",
    width:34,
  },
  lastText: {
    textAlign: 'right',
    color: COLORS.purple,
    lineHeight: 19,
    fontWeight: "400",
    marginTop: 8,
  }
});