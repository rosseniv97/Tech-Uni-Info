import React from 'react';
import { SectionList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../App'

export default function GroupsView({route, navigation}) {

    const activities = [
        {
          title: 'Administration',
          data: ['Documents', 'Schedules', 'Alerts'],
        },
        {
          title: 'Operating systems',
          data: ['Course works', 'Date&Time', 'Alerts'],
        },
        {
            title: 'Parallel programming',
            data: ['Course works', 'Date&Time', 'Alerts'],
        },
        {
            title: 'Electrical engineering',
            data: ['Course works', 'Date&Time', 'Alerts'],
        },
      ];

    function Activities({title}) {
        return (
            <TouchableOpacity style={{flex: 2}} style={styles.menueButton}>
                <Text style={styles.menueButtonText}>{title}</Text>
            </TouchableOpacity>
        )
    }  
    return(
        <View style={{flex:1}}>
        <View style={styles.menueBar}>
          <Text style={{flex: 1}}>Hello, somebody!</Text>
          <View style={styles.voidSpace}> 
          </View>
          <TouchableOpacity style={styles.menueButton}>
            <Text style={styles.menueButtonText}>Groups</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.container}>
            <SectionList style={{flex: 1}}
                sections={activities}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Activities style={{flex: 3}} title={item} />}
                renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
            )}
        />
    
        </View>
      </View>
    );
}
