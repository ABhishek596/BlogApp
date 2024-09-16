import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../redux/actions/authActions';
import {styles} from './styles';
import CustomTextInput from '../../component/CustomTextInput';
import CustomInput from '../../component/CustomInput';
import axios from 'axios';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);
  // console.log('usssr', user);
  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = phone => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleSignUp = async () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    if (!validatePhone(phone)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid 10-digit phone number',
      );
      return;
    }

    // If validation passes, dispatch the sign-up action
    const userData = {
      name,
      email,
      phone,
      password,
    };

    try {
      let data = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password,
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.43.3:3000/api/signup',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      dispatch(signUp(userData));
      Alert.alert('Success', 'Registration successfully');
      navigation.navigate('Loginscreen');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <Text style={styles.title}>Sign Up</Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <CustomTextInput
            iconName="account-circle"
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            keyboardType="default"
          />

          <CustomTextInput
            iconName="email"
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomInput password={password} setPassword={setPassword} />

          <CustomTextInput
            iconName="call"
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.title2}>Already have an account? Login</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
