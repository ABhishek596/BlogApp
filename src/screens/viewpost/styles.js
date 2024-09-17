import { StyleSheet ,Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    leftIcon: {
      // flex: 1,
      alignItems: 'center',
      alignSelf:'flex-start'
    },
    title: {
      flex: 2,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height:height *0.7,
    },
    content: {
      padding: 15,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    descriptionText: {
      fontSize: 16,
      marginTop: 10,
    },
  });