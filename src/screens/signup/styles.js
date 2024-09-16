import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 40,
      padding:15
    },
    input: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    eyeIcon: {
      position: 'absolute',
      right: 10,
      fontSize: 20,
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
        alignSelf:'center'
      },
  });