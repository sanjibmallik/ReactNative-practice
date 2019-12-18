import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Game is Over
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})



export default GameOver;