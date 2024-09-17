import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Dimensions, Alert,StyleSheet} from 'react-native';
import CustomInput from '../../component/CustomInput';
import CustomTextInput from '../../component/CustomTextInput';
import {token} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import axios from 'axios';
const {width, height} = Dimensions.get('screen');

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
        // url: `${REACT_APP_BASE_URL}/api/login`,
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
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize:width *0.075,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
    bottom:height * 0.14

  },

  forgotPassword: {
    color: '#007AFF',
    textAlign: 'right',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#FEC453',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    // position:'absolute'
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40,
  },
  title2: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#000000',
    marginTop: 40,
    alignSelf: 'center',
  },

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
    marginRight: 10, // Adjust spacing between icon and input
  },
  input2: {
    flex: 1,
    height: 47,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
