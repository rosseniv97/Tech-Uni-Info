import React from 'react';
import { SectionList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../App'
import Header from '../controls/Header'

export default function GroupsView({route, navigation}) {

    const activities = [
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
        <Header></Header>
        <View style={styles.containerActivities}>
            
            <SectionList
                sections={activities}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Activities  title={item} />}
                renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionTitle}>{title}</Text>
            )}
        />
        </View>
      </View>
    );
}
