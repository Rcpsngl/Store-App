/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2,
  },
  img_container: {
    backgroundColor: '#FCFFF5',
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 4,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
  price: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#696969',
  },
  inner_container: {
    padding: 5,
  },
  inStock: {
    marginTop: 5,
    marginBottom: 5,
    color: 'e61919',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
