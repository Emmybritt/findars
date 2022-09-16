import { Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import { ARTISANS } from '../../constants/ARTISANS'
import {COLORS} from '../../constants/COLORS';

const ArtisanDetails = ({route}) => {
  return (
    <View>
      <Image style={{
        width: '100%',
        height: '50%',
        resizeMode: 'cover'
      }} source={ARTISANS[0].profilePic} />
    </View>
  )
}

export default ArtisanDetails

const styles = StyleSheet.create({})