import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import OnboardingScreen from '../screens/OnboardingScreen'
import Signin from '../screens/Signin'
import SigUp from '../screens/SignUp'


const Stack = createNativeStackNavigator()

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='onboarding' component={OnboardingScreen} />
        <Stack.Screen name='signin' component={Signin} />
        <Stack.Screen name='Signup' component={SigUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations