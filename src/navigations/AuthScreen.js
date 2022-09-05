import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Signin from '../screens/Signin';


const AuthStack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='Signin' component={Signin} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}

export default AuthScreen