import React from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {Product} from './Product';
import {products} from '../data/data.js';
interface ProductContainerProps {}

const windowWidth = Dimensions.get('window').width;

export const ProductContainer: React.FC<ProductContainerProps> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(product => {
          return (
            <Product
              key={product.id}
              productName={product.title}
              productPoster={product.imgURL}
              productPrice={product.price}
              inStock={product.inStock}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    width: windowWidth,
  },
});
