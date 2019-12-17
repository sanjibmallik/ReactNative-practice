import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Start a New Game
            </Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Enter a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { }} color = { Colors.secondary } />
                    <Button title="Confirm" onPress={() => { }} color = { Colors.primary } />
                </View>

            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        paddingVertical: 10
    },
    inputContainer: {
        marginTop:10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15

    }

})



export default StartGameScreen;