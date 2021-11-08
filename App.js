import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);

  const addition = () => {
    setResult(parseFloat(numA) + parseFloat(numB));
  };

  const subtraction = () => {
    setResult(parseFloat(numA) - parseFloat(numB));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <TextInput
          style={styles.input}
          onChangeText={numA => setNumA(numA)}
          value={String(numA)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={numB => setNumB(numB)}
          value={String(numB)}
          keyboardType="numeric"
        />
        <TextInput />
      </View>
      <View style={styles.button}>
        <Button title="+" onPress={addition} />
        <Button title="-" onPress={subtraction} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'red'
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 200
  }
});