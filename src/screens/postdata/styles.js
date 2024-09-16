import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf:'flex-start',
    color:'#000000'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  imageButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  imageButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius:10
  },
  submitButton: {
    backgroundColor: '#FEC453',
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});