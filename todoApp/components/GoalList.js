import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const GoalList = props => {

    return (
        <View style={styles.listItem}>
            <Text>
                {props.title}
            </Text>
        </View>
    );

}


const styles = StyleSheet.create({
        listItem: {
            padding: 10,
            marginVertical: 10,
            borderWidth: 1,
            backgroundColor: '#ccc',
            borderBottomColor: 'black'
        }
    
})

export default GoalList