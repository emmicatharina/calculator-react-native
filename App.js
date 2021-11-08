import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const addition = () => {
    let sum = parseFloat(numA) + parseFloat(numB);
    setResult(sum);
    setHistory([...history, {key: `${numA} + ${numB} = ${sum}`}]);
  };

  const subtraction = () => {
    let sum = parseFloat(numA) - parseFloat(numB);
    setResult(sum)
    setHistory([...history, {key: `${numA} - ${numB} = ${sum}`}]);
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
      </View>
      <View style={styles.buttoncont}>
        <Button title="+" onPress={addition} />
        <Button title="-" onPress={subtraction} />
      </View>
      <View style={styles.listcont}>
        <Text       >History</Text>
        <FlatList
          data={history}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={((item, index) => index.toString())}
        />
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
  buttoncont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    color: 'red'
  },
  listcont: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 200
  }
});