import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {token} from '../../redux/actions/authActions';
import {useDispatch,useSelector} from 'react-redux';
import {styles} from './styles';
import axios from 'axios';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser]=useState();
  const token1 = useSelector(state => state.auth.token);

  useEffect(() => {
    const FormData = require('form-data');
    let data = new FormData();

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.43.3:3000/api/profile',
      headers: {
        Authorization: token1,
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log('profiledata---',JSON.stringify(response.data));
        setUser(response?.data?.user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMtm7lYpeWlyBRa7WcadZt0d-7SSzWQXusw&s'}} // Replace with actual image URL or local image
        style={styles.profileImage}
      />

      {/* User Information */}
      <Text style={styles.userName}>{user?.name}</Text>
      <Text style={styles.userInfo}>{user?.email}</Text>
      <Text style={styles.userInfo}>{user?.phone}</Text>
      <View style={{height: 30}} />
      {/* Option List */}

      <TouchableOpacity style={styles.optionContainer} onPress={()=>navigation.navigate('MyPosts')}>
        <Icon name="list" type="material" color="#555" /> 
        <Text style={styles.optionText}>All Posts</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionContainer}>
        <Icon name="notifications" type="material" color="#555" />
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Icon name="settings" type="material" color="#555" />
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Icon name="logout" type="material" color="#555" />
        <Text style={styles.optionText} onPress={() => dispatch(token(null))}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
