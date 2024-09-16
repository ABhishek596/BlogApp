import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import {addPost} from '../../redux/actions/postAction';
import * as ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

const PostScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('ravi');
  const [imageUri, setImageUri] = useState(null);
  const token1 = useSelector(state => state.auth.token);
  console.log('img urlll',imageUri);
  const dispatch = useDispatch();

  // Handle image selection
  const selectImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('img urlll response',response);
      if (response && response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Enhanced validation with clear and specific error messages
  const validatePost = () => {
    let isValid = true;
    const errorMessages = [];

    if (!title) {
      isValid = false;
      errorMessages.push('Please enter a title for your post.');
    }

    if (!content) {
      isValid = false;
      errorMessages.push('Please write some content for your post.');
    }

    if (errorMessages.length > 0) {
      const combinedError = errorMessages.join('\n');
      Alert.alert('Validation Errors', combinedError);
    }

    return isValid;
  };

  // Handle post submission with clear success message
  const handleSubmit = () => {
    if (validatePost()) {
      let data = JSON.stringify({
        title: title,
        content: content,
        imageUrl: 'http://example.com/image11.jpg',
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.43.3:3000/api/posts',
        headers: {
          Authorization: token1,
        },
        data: data,
      };

      axios
        .request(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });

      const newPost = {
        title,
        content,
        author,
        imageUri: imageUri || 'https://via.placeholder.com/150', // Static image if none selected
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
      dispatch(addPost(newPost));

      Alert.alert('Success!', 'Your post has been submitted successfully.');

      // Navigate to the Display Screen (optional)
      // navigation.navigate('Display', { post: newPost });

      // Reset fields
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUri(null);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create a New Post</Text>

      {imageUri ? (
        <Image source={{uri: imageUri}} style={styles.image} />
      ) : (
        <TouchableOpacity onPress={selectImage}>
          <View
            style={{
              width: '100%',
              height: '70%',
              borderWidth: 0.5,
              borderColor: 'grey',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" size={24} color="grey" />
          </View>
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <View style={{height: 60}} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PostScreen;
