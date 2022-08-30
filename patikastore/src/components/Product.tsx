import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';

interface ProductProps {
  productPoster: string;
  productName: string;
  productPrice: string;
  inStock: boolean;
}

const windowWidth = Dimensions.get('window').width;

export const Product: React.FC<ProductProps> = ({
  productPoster,
  productName,
  productPrice,
  inStock,
}) => {
  return (
    <View style={productPoster ? styles.productContentContainer : null}>
      <View style={styles.productPosterContainer}>
        <Image
          source={{
            uri: productPoster,
          }}
          style={styles.productPoster}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={2}>
          {productName}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text>{productPrice}</Text>
      </View>
      {!inStock && (
        <View style={styles.stockContainer}>
          <Text style={styles.stock}>Out of Stock</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productContentContainer: {
    position: 'relative',
    backgroundColor: '#D6D0D6',
    width: windowWidth / 2 - 15,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  productPosterContainer: {
    alignItems: 'center',
  },
  productPoster: {
    marginTop: 10,
    width: windowWidth / 2 - 40,
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
  },
  stockContainer: {
    marginTop: 3,
    marginLeft: 15,
    marginBottom: 10,
  },
  stock: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
