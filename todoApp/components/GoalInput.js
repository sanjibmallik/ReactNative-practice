import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredgoal] = useState("");
    const enterGoalHandler = (value) => {
        setEnteredgoal(value)
    }
    const clearGoal = (value)=>{
        setEnteredgoal(value)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your goal"
                style={styles.input}
                onChangeText={enterGoalHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPressOut = {clearGoal} onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }

})

export default GoalInput