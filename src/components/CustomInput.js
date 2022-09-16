import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/COLORS";

const CustomInput = ({
  label,
  value,
  placeholder,
  onChangeText,
  error,
  iconRight,
  style,
  ...props
}) => {
  return (
    <View>
      <View>
        <Text style={styles.label}>{label && label}</Text>
        <View style={[styles.textInputContainer, style]}>
          <TextInput
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput}
            placeholder={placeholder && placeholder}
            {...props}
          />
          {iconRight && (
            iconRight
          )}
          
        </View>

        <Text style={styles.errorText}>{error && error}</Text>
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 16,
  },
  textInputContainer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 9,
    borderColor: COLORS.purple,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    width: '92%',
    paddingVertical: 11,
    fontSize: 16,
  },
  errorText: {
    fontSize: 11.11,
    fontWeight: "400",
    lineHeight: 15,
    marginVertical: 3,
    color: 'red'
  },
});
