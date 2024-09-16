import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have the icon library installed
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width,height} = Dimensions.get('screen');

const CustomInput = ({ password, setPassword, placeholder = 'Password' }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <Icon name="lock" size={24} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        <Text style={styles.eyeIcon}>
          {isPasswordVisible ? '🙈' : '👁️'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        // borderColor: '#ddd',
        // borderWidth: 1,
        // borderRadius: 8,
        // paddingHorizontal: 10,
        width:width * 0.65,
      //   marginBottom: 20,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor:'red',
        paddingHorizontal:10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
      },
      eyeIcon: {
      //   position: 'absolute',
        // right: 10,
        fontSize: 20,
      },
  icon: {
    marginRight: 10, // Adjust spacing between icon and input
  },
});

export default CustomInput;

