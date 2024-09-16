import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
    bottom:150

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
