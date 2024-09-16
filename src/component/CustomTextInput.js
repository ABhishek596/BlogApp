import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using MaterialIcons, you can change it as needed
const {width, height} = Dimensions.get('screen');

const CustomTextInput = ({ iconName, placeholder, value, onChangeText, keyboardType = 'default' }) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input2}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.89, // dynamic width based on screen size
        marginBottom: 20, // Adjust as needed
      },
  icon: {
    marginRight: 10,
  },
  input2: {
    flex: 1,
    height: 47,
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
