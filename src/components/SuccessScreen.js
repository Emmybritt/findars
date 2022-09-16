import { Image, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from './Container'
import { COLORS } from '../constants/COLORS'

const SuccessScreen = ({title}) => {
  return (
    <Modal color="white">
      {/* <StatusBar backgroundColor="transparent" /> */}
      <Container>
      <View style={{
        marginTop: 20,
      }}>
        <Image source={require('../../assets/FINDARlogo.png')} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create New Password</Text>
      </View>
      <View>
        <Image style={styles.image} source={require('../../assets/Vectorcorrect.png')} />
      </View>
      <Text style={styles.bottomText}>{title}</Text>
      </Container>
    </Modal>
  )
}

export default SuccessScreen

const styles = StyleSheet.create({
  headerText: {
    color: COLORS.purple,
    fontSize: 23.04,
    lineHeight: 27,
    fontWeight: "500",
    textAlign: "center"
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 90,
  },
  image: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  bottomText: {
    fontSize: 19.2,
    textAlign: 'center',
    color: COLORS.purple,
    fontWeight: "500"
  }
})