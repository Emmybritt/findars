import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/COLORS'

const CustomButton = ({title, onPress, ...props}) => {
  return (
    <TouchableOpacity {...props} onPress={onPress} style={styles.btn}>
      <Text style={styles.title}>{title && title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.purple,
    padding: 13,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24
  }
})