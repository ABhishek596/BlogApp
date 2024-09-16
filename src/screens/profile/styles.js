import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      // paddingTop: 50,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 180/2,
      marginBottom: 10,
      marginTop:30
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    userInfo: {
      fontSize: 16,
      color: '#777',
      marginBottom: 5,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '95%',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginTop: 10,
    },
    optionText: {
      fontSize: 18,
      marginLeft: 15,
      color: '#333',
    },
  });