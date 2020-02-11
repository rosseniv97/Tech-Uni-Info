import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from "../assets/logo.png"
import { styles } from '../App'

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
      <View style={{flex:1, }}>
        <View style={styles.menueBar}>
          <Text style={{flex: 1}}>Hello, somebody!</Text>
          <View style={styles.voidSpace}> 
          </View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('GroupsView', {
              itemId: 3,
              params: ""
            })
          }} style={styles.menueButton}>
            <Text style={styles.menueButtonText}>Groups</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.container}>
          <View style={styles.logoContainer} >
            <Image source={logo} style={styles.logo} />
          </View>   
          <TouchableOpacity onPress={openImagePickerAsync} style={styles.buttonPic}>
            <Text style={styles.picButtonText}>Pick a photo</Text>
          </TouchableOpacity>
          <View style={styles.voidSpace}> 
          </View>
        </View>
      </View>
    );
  }
  
  