import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {useSelector} from 'react-redux';
const posts = useSelector(state => state.post.posts);

const MyPosts = ({navigation}) => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item?.imageUri }} style={styles.image} />
        <TouchableOpacity style={styles.deleteButton}>
          <FontAwesome5 name="trash" size={14} color="#000000" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your All Posts</Text>
      </View>
      <View style={{height:20}}/>
      <FlatList
        data={posts}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};



export default MyPosts;