import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather, FontAwesome5, Octicons } from "@expo/vector-icons";
import Container from "./Container";
import { COLORS } from "../constants/COLORS";

const UserProfileComponent = () => {
  return (
    <View>
      <Container>
        <View style={styles.addressContainer}>
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={styles.addres}>
            <AntDesign name="contacts" size={24} color={COLORS.finderGray} />
            <Text style={styles.addressText}>Home Address</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#eee',
            padding: 9,
            borderRadius: 30,
          }}>
          <Octicons name="pencil" size={18} color={COLORS.purple} />
          </View>
        </View>
        <Text style={{
          marginTop: 16,
          color: COLORS.black
        }}>37, I’m going through a lot street, Sapa bus-stop, God Abeg, Lagos, Nigeria</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={styles.addres}>
          <Feather name="phone-call" size={24} color={COLORS.finderGray} />
            <Text style={styles.addressText}>Phone Number</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#eee',
            padding: 9,
            borderRadius: 30,
          }}>
          <Octicons name="pencil" size={18} color={COLORS.purple} />
          </View>
        </View>
        <Text style={{
          marginTop: 16,
          color: COLORS.black
        }}>0905-326-9125</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={styles.addres}>
          <FontAwesome5 name="envelope" size={24} color={COLORS.finderGray} />
            <Text style={styles.addressText}>Email Address</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#eee',
            padding: 9,
            borderRadius: 30,
          }}>
          <Octicons name="pencil" size={18} color={COLORS.purple} />
          </View>
        </View>
        <Text style={{
          marginTop: 16,
          color: COLORS.black
        }}>praizeolorunfemi@gmail.com</Text>
        </View>
        
      </Container>
    </View>
  );
};

export default UserProfileComponent;

const styles = StyleSheet.create({
  addres: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    marginLeft: 9,
    color: COLORS.finderGray,
    fontSize: 13.33,
    fontWeight: "400",
  },
  addressContainer: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
  }
});
