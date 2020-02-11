import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../App'

export default function Presentation({route, navigation}) {
  const {imageURI} = route.params;
        return (
            <View style={styles.container}>
              <Image source={{ uri: imageURI }} style={styles.thumbnail} />
              
            </View>
          );
    }
