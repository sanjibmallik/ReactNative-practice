import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props =>{
    return (
        <TextInput {...props} style = {{...styles.input, ...props.style}} />
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginVertical: 10,
        height: 20,
        
    }

})

export default Input