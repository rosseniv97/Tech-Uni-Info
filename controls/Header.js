import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../App';

export default function Header(props) {

    return(
      <View style={styles.menueBar}>
      <Text >Hello, somebody!</Text>
      <View style={styles.voidSpace}> 
      </View>
      <TouchableOpacity onPress={props.navigateFunction} style={styles.menueButton}>
        <Text style={styles.menueButtonText}>Study Groups</Text>
      </TouchableOpacity>
    </View>
    );
        
}