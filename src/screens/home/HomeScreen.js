import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState();
  const posts = useSelector(state => state.post.posts);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    const FormData = require('form-data');
    let data = new FormData();

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.43.3:3000/api/profile',
      headers: {
        Authorization: token,
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setUser(response?.data?.user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Icon name="menu" size={30} color="black" />
        <Text style={styles.greeting}>Hello, {user?.name}</Text>
        <Icon
          name="person"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <ScrollView style={styles.container}>
        {/* Search and Location */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Restaurant"
          />
          <View style={styles.location}>
            <Icon name="location-pin" size={20} color="orange" />
            <Text>Indore, Madhya Pradesh</Text>
          </View>
        </View>

        {/* Buttons */}
        {/* <View style={styles.buttonContainer}>
        <Button
          title="Promotions"
          icon={<Icon name="local-offer" size={20} color="white" />}
          buttonStyle={styles.button}
        />
        <Button
          title="Best Rated"
          icon={<Icon name="star" size={20} color="white" />}
          buttonStyle={styles.button}
        />
      </View> */}

        {/* Categories */}
        <View style={{height: 110}}>
          <ScrollView
            horizontal
            style={styles.categoryContainer}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={{uri: 'https://via.placeholder.com/70'}}
              />
              <Text>Asian Food</Text>
            </View>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={{uri: 'https://via.placeholder.com/70'}}
              />
              <Text>Salads</Text>
            </View>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={{uri: 'https://via.placeholder.com/70'}}
              />
              <Text>Cakes</Text>
            </View>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={{uri: 'https://via.placeholder.com/70'}}
              />
              <Text>Pasta</Text>
            </View>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={{uri: 'https://via.placeholder.com/70'}}
              />
              <Text>American</Text>
            </View>
          </ScrollView>
        </View>
        {/* Near Restaurant */}
        <Text style={styles.sectionTitle}>New blogs</Text>

        <ScrollView style={styles.container}>
          {posts.length > 0 ? (
            posts
              .slice()
              .reverse()
              .map((post, index) => (
                <TouchableOpacity>
                <View style={styles.restaurantCard}>
                  <Image
                    style={styles.restaurantImage}
                    source={{uri: post.imageUri}}
                  />
                  <View style={styles.restaurantInfo}>
                    <Text style={styles.restaurantName}>{post.title}</Text>
                    <Text style={styles.restaurantDetails}>{post.content}</Text>
                    <Text style={styles.restaurantPrice}>{post.timestamp}</Text>
                  </View>
                </View>
                </TouchableOpacity>
              ))
          ) : (
            <Text style={styles.noPostText}>
              No more post available!
            </Text>
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// import { useSelector } from 'react-redux';

// const HomeScreen = () => {
//   // Fetch the posts from Redux
//   const posts = useSelector((state) => state.post.posts);

//   return (
{
  /* <ScrollView style={styles.container}>
  {posts.length > 0 ? (
    posts
      .slice()
      .reverse()
      .map((post, index) => (
        <View key={index} style={styles.postContainer}>
          <Image source={{uri: post.imageUri}} style={styles.image} />
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.content}>{post.content}</Text>
          <Text style={styles.author}>By: {post.author}</Text>
          <Text style={styles.timestamp}>Posted at: {post.timestamp}</Text>
        </View>
      ))
  ) : (
    <Text style={styles.noPostText}>
      No post available. Please create a post.
    </Text>
  )}
</ScrollView>; */
}
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   postContainer: {
//     marginBottom: 30,
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   author: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     marginBottom: 5,
//   },
//   timestamp: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   noPostText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default HomeScreen;
