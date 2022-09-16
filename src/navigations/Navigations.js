import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CreateNewPassword from '../screens/authentication/CreateNewPassword'
import ForgotPassword from '../screens/authentication/ForgotPassword'
import PhoneVerification from '../screens/authentication/PhoneVerification'
import Signin from '../screens/authentication/Signin'
import SignUp from '../screens/authentication/SignUp'
import VerifyResetPassword from '../screens/authentication/VerifyResetPassword'
import ArtisanDetails from '../screens/home/ArtisanDetails'
import Favourites from '../screens/home/Favourites'
import Histories from '../screens/home/Histories'
import HomeScreen from '../screens/home/HomeScreen'
import Messages from '../screens/home/Messages'
import Profile from '../screens/home/Profile'
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
        <Stack.Screen name='create-new-password' component={CreateNewPassword} />
        <Stack.Screen name='verify-phone-number' component={PhoneVerification} />
        <Stack.Screen name='home-screen' component={HomeScreen} />
        <Stack.Screen name='messages' component={Messages} />
        <Stack.Screen name='favourites' component={Favourites} />
        <Stack.Screen name='histories' component={Histories} />
        <Stack.Screen name='artisan-detail' component={ArtisanDetails} />
        <Stack.Screen name='profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations