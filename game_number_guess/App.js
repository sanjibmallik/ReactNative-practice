import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'

export default function App() {
  const headerTitle = "Guess A Number";
  const [selectedNumber, setSelectedNumber] = useState()
  const startGameHandler = (enteredValue) => {
    setSelectedNumber(enteredValue)
  }
  let container = <StartGameScreen startGame={startGameHandler} />;
  if (selectedNumber) {
    container = <GameScreen userChoice={selectedNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      {container}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
