import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';
import CustomInput from '../../component/CustomInput';
import CustomTextInput from '../../component/CustomTextInput';
import {token} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    // const userData = {
    //   email,
    //   password,
    // };

    try {
      let data = JSON.stringify({
        email: email,
        password: password,
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.43.3:3000/api/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      const response = await axios.request(config);
      console.log('login',JSON.stringify(response.data))
      dispatch(token(response?.data?.token));
    } catch (error) {
      Alert.alert('Error', 'login failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <CustomTextInput
        iconName="email"
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <CustomInput password={password} setPassword={setPassword} />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText} onPress={handleLogin}>
          Log In
        </Text>
      </TouchableOpacity>

      <Text
        style={styles.title2}
        onPress={() => navigation.navigate('SignUpScreen')}>
        Don't have an account ? SignUp
      </Text>

     
    </View>
  );
};

export default LoginScreen;
