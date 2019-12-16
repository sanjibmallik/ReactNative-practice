import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput'
import GoalList from './components/GoalList'

export default function App() {




  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (enteredGoalText) => {

    setGoalList(goalList => [...goalList, { id: Math.random().toString(), value: enteredGoalText }]);
    
  }

  const onDeleteHandler = (goalId) => {
    setGoalList((goalList) => {
      return goalList.filter((goal) => goal.id !== goalId
      )
    })
  }




  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => (
          <GoalList
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={onDeleteHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

});
