import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/COLORS';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <TouchableNativeFeedback onPress={() => {
        navigation.navigate("home-screen")
      }}>
      <AntDesign name="home" size={24} color="white" />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
        navigation.navigate("favourites")
      }}>
      <AntDesign name="hearto" size={24} color="white" />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
        navigation.navigate("messages")
      }}>
      <Feather name="message-square" size={24} color="white" />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => {
        navigation.navigate("histories")
      }}>
      <FontAwesome5 name="history" size={24} color="white" />
      </TouchableNativeFeedback>
      
    </View>
  )
}

export default CustomFooter

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }
})