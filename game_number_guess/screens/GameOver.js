import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Game is Over
            </Text>
            <Text>
                Total Rounds taken: {props.rounds}
            </Text>
            <Text>
                User number was: {props.userNumber}
            </Text>

            <Button title="NEW GAME" onPress={props.onRestartGame} />
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