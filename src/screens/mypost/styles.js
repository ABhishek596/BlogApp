import { StyleSheet } from 'react-native';


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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
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
      right: 10,
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 5,
      // borderRadius: 5,
    },
  });