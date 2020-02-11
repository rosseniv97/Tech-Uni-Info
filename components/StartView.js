import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from "../assets/logo.png"

export default function StartView({navigation}) {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let [currentPage, setCurrentPage] = React.useState("main");

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setCurrentPage("picked photo");
    setSelectedImage({ localUri: pickerResult.uri });console.log(pickerResult.uri);
    navigation.navigate('Presentation', {
      itemId: 2,
      imageURI: pickerResult.uri
    })
  };
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions}>
        
        </Text>
  
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
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