import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import ProductCard from './components/ProductCard';
import SearchArea from './components/SearchBar';
import products_data from './product_data.json';

function App() {
  const renderProducts = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>MY STORE</Text>
      <SearchArea />
      <FlatList
        data={products_data}
        renderItem={renderProducts}
        numColumns="2"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#193441',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#C9DFF1',
    margin: 10,
    textAlign: 'center',
  },
});
export default App;
