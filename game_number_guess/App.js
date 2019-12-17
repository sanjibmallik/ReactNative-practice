import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const headerTitle = "Number Guessing Game";
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
