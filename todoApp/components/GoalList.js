import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalList = props => {

    return (
        <TouchableOpacity activeOpacity = {0.8} onPress = { props.onDelete.bind(this, props.id) }>
        <View style={styles.listItem}>
            <Text>
                {props.title}
            </Text>
        </View>
        </TouchableOpacity>
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