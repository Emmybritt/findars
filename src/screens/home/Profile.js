import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/COLORS'
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("screen").height
  );
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("screen").width
  );
  return (
    <View>
      <View style={{
        backgroundColor: COLORS.purple,
        height: windowHeight / 3.5
      }}>
        <View>
        <Ionicons name="ios-arrow-back-circle-sharp" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})