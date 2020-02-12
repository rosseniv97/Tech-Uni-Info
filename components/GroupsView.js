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
            <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.menueButtonText}>{title}</Text>
            </TouchableOpacity>
        )
    }  
    return(
        <View style={{flex:1, backgroundColor: '#fff'}}>
        <View style={styles.menueBar}>
          <Text >Hello, somebody!</Text>
          <View style={styles.voidSpace}> 
          </View>
          <TouchableOpacity style={styles.menueButton}>
            <Text style={styles.menueButtonText}>Groups</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.containerActivities}>
            
            <SectionList
                sections={activities}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Activities  title={item} />}
                renderSectionHeader={({ section: { title } }) => (
            <Text style={{marginTop: 10, alignContent: 'center'}}>{title}</Text>
            )}
        />
    
        </View>
      </View>
    );
}
