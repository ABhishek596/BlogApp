import { StyleSheet,Dimensions } from 'react-native';

const {width, height}=Dimensions.get('screen')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
    height:50,
    paddingHorizontal: 8,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginVertical: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  restaurantCard: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    height:height * 0.3,
    width:width * 0.9,
    paddingBottom:15,
    alignSelf:'center'
    // backgroundColor:'red',
  },
  restaurantImage: {
    width: "100%",
    height: 130,
    borderRadius: 5,
  },
  restaurantInfo: {
    width: "100%",
    marginTop: 5,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000000'
  },
  restaurantDetails: {
    color: '#777',
  },
  restaurantPrice: {
    color: '#000',
    fontWeight: 'semi-bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  noPostText:{
    alignSelf:'center',
    marginTop:50
  }
});