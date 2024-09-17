import { StyleSheet,Dimensions } from 'react-native';
const {width, height}=Dimensions.get('screen')


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f0f0f0',
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    flatListContainer: {
      padding: 10,
    },
    imageContainer: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      width: width * 0.32,
      height: 100,
      // gap:4
    },
    image: {
      width: '90%',
      height: 100,
      // borderRadius: 10,
      backgroundColor:'grey'
    },
    deleteButton: {
      position: 'absolute',
      top: 5,
      right: width * 0.025,
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 5,
      // borderRadius: 5,
    },
    noPostText:{
      alignSelf:'center',
      marginTop:50
    }
  });