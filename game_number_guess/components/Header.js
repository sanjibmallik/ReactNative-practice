import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                {props.title}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90,
        backgroundColor: 'pink'
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'normal',
        fontWeight: 'bold'

    }

})



export default Header;