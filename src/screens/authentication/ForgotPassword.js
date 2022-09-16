import { Image, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { COLORS } from '../../constants/COLORS';
import { useNavigation } from '@react-navigation/native';

const ForgotPasspord = () => {
  const [errors, setErrors] = React.useState({});
  const [form, setForm] = React.useState({});
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  
  function getDisabledStatus() {

  }
  function handleResetPassword() {
    if (!form.name) {
      setErrors((prev) => {
        return {...prev, name: "Enter your mail or phone number to reset password."}
      })
    }else{
      setErrors((prev) => {
        return {...prev, name: ""}});
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        navigation.navigate("verify-otp")
        }, 1000);
    }
  }
  function onChange({name, value}) {
    setForm({...form, name: value});
  }

  return (
    <Container>
      
      <ScrollView showsVerticalScrollIndicator={false} style={{
        marginTop: Platform.OS === 'ios' ? 20 : 50,
        paddingTop: 10,
      }}>
        <View style={{
          marginBottom: 44,
          marginTop: 10,
        }}>
        <Image source={require('../../../assets/FINDARlogo.png')} />
      </View>
        <View>
          <Text style={styles.HeaderText}>Forgot Password</Text>
        </View>
        <View>
          <Text style={{
            textAlign: 'center',
            fontSize: 13.33,
            lineHeight: 19,
          }}>Input your phone number or email address</Text>
        </View>
        <View>
          {/* Name Field */}
          <CustomInput
            error={errors.name}
            placeholder="Phone Number or Email"
            onChangeText={(value) => onChange({ name: "name", value })}
          />
         
          
          

          <View
            style={{
              marginTop: 10,
            }}
          >
            <CustomButton disabled={getDisabledStatus()} onPress={handleResetPassword} title={isLoading ? "Please wait.." : "Proceed"} />
            
          </View>
          {/* <LoginFooter /> */}
        </View>
      </ScrollView>
    </Container>
  )
}

export default ForgotPasspord

const styles = StyleSheet.create({
  HeaderText: {
    textAlign: "center",
    color: COLORS.purple,
    lineHeight: 27,
    fontSize: 23.04,
    fontWeight: "500",
    marginVertical: 20,
  },
})