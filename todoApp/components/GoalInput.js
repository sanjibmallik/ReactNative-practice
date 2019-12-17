import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredgoal] = useState("");
    const enterGoalHandler = (value) => {
        setEnteredgoal(value)
    }
    const clearGoal = (value) => {
        setEnteredgoal(value)
    }
    const addButtonHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredgoal("");
    }

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter your goal"
                    style={styles.input}
                    onChangeText={enterGoalHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPressOut={clearGoal} onPress={addButtonHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'

    },
    button: {
        width: '40%'
    }

})

export default GoalInput