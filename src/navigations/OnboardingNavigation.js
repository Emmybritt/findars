import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';

const OnboardingStack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <NavigationContainer>
      <OnboardingStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <OnboardingStack.Screen name='onboarding' component={OnboardingScreen} />
      </OnboardingStack.Navigator>
    </NavigationContainer>
  )
}

export default OnboardingNavigation
