import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver';

export default function App() {
  const headerTitle = "Guess A Number";
  const [selectedNumber, setSelectedNumber] = useState();
  const [gameRound, setGameRound] = useState(0)
  const startGameHandler = (enteredValue) => {
    setSelectedNumber(enteredValue)
    setGameRound(0);
  }
  const gameRoundHandler = (round) => {

    setGameRound(round);
  }
  let container = <StartGameScreen startGame={startGameHandler} />;
  if (selectedNumber && gameRound <= 0) {
    container = <GameScreen userChoice={selectedNumber} onGameOver={gameRoundHandler} />;
  } else if (gameRound > 0) {
    container = <GameOver />
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
