import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const generatedNumber = Math.floor(Math.random() * (max - min)) + min;
    if (generatedNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    else {
        return generatedNumber
    }
}


const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }

    }, [userChoice, onGameOver, currentGuess])

    const nextButtonHandler = (direction) => {

        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'You have lied', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;

        } else {
            currentLow.current = currentGuess;
        }

        const newGuess = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(newGuess);
        setRounds((rounds) => rounds + 1)

    }



    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextButtonHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextButtonHandler.bind(this, 'greater')} />
            </Card>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

})

export default GameScreen;