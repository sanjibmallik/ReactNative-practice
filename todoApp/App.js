import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredgoal] = useState("");

  const enterGoalHandler = (value) => {
    setEnteredgoal(value)
  }
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = () => {
    console.log(enteredGoal)
    setGoalList(goalList => [...goalList, { id: Math.random().toString(), value: enteredGoal }]);
  }




  return (
    <View style={styles.screen}>

      <View>
        <TextInput placeholder="Enter your goal"
          style={styles.textInputBox}
          onChangeText={enterGoalHandler}
          value={enteredGoal}
        />
      </View>

      <View>
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      {/* <ScrollView>
        {goalList.map(goal => <View key={goal} style={styles.listItem}>
          <Text >{goal}</Text>
        </View>)}
      </ScrollView> */}

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>
              {itemData.item.value}
            </Text>
          </View>
        )} 
        />
    

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  textInputBox: {
    padding: 10, borderBottomColor: 'blue', borderWidth: 1
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: '#ccc',
    borderBottomColor: 'black'
  }
});
