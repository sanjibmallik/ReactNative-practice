import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.inputContainer, ...props.style }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        color: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 9
    },
})
export default Card;