import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Presentation({route, navigation}) {
  const {imageURI} = route.params;
        return (
            <View style={styles.container}>
              <Image source={{ uri: imageURI }} style={styles.thumbnail} />
              
            </View>
          );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
  });
