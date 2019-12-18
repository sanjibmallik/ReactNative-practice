import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Alert } from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedValue, setSelectedValue] = useState();
    const [confirmed, setConfirmed] = useState(false);
    const inputValueHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetButtonHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    }
    const confirmButtonHandler = () => {
        let userValue = parseInt(enteredValue);
        if (isNaN(userValue) || userValue > 99 || userValue <= 0) {
            Alert.alert('Invalid Number',
                'Number should be between 0 to 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetButtonHandler }]
            );
            return;
        }
        setSelectedValue(userValue);
        setEnteredValue('');
        setConfirmed(true);
        Keyboard.dismiss();
    }

    let confirmedMessage;

    if (confirmed === true) {
        confirmedMessage = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedValue}</NumberContainer>
                <Button title="START GAME" onPress={ ()=> props.startGame(selectedValue) }/>
            </Card>
        )

    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text>
                    Start a New Game
            </Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Enter a number</Text>
                    <Input
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={2}
                        blurOnSubmit
                        onChangeText={inputValueHandler}
                        value={enteredValue}
                        style={styles.input} />
                    <View style={styles.buttonContainer}>
                        <Button title="Reset" onPress={resetButtonHandler} color={Colors.secondary} />
                        <Button title="Confirm" onPress={confirmButtonHandler} color={Colors.primary} />
                    </View>

                </Card>
                {confirmedMessage}
            </View>

        </TouchableWithoutFeedback>
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
        marginTop: 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }

})



export default StartGameScreen;