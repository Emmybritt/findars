import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ForgotPassword from '../screens/authentication/ForgotPassword'
import Signin from '../screens/authentication/Signin'
import SignUp from '../screens/authentication/SignUp'
import VerifyResetPassword from '../screens/authentication/VerifyResetPassword'
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen'



const Stack = createNativeStackNavigator()

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='onboarding' component={OnboardingScreen} />
        <Stack.Screen name='signin' component={Signin} />
        <Stack.Screen name='Signup' component={SignUp} />
        <Stack.Screen name='forgot-password' component={ForgotPassword} />
        <Stack.Screen name='verify-otp' component={VerifyResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations