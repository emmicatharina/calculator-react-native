import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Calculator(props) {
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [result, setResult] = useState('');
	const [history, setHistory] = useState([]);

	const addition = () => {
		const sum = parseFloat(num1) + parseFloat(num2);
		setResult(sum);
		setHistory([...history, { key: `${num1} + ${num2} = ${sum}` }]);
		setNum1('');
		setNum2('');
	};

	const subtraction = () => {
		const sum = parseFloat(num1) - parseFloat(num2);
		setResult(sum)
		setHistory([...history, { key: `${num1} - ${num2} = ${sum}` }]);
		setNum1('');
		setNum2('');
	};

	const { navigate } = props.navigation;

	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Text>Result: {result}</Text>
				<TextInput
					style={styles.input}
					onChangeText={num1 => setNum1(num1)}
					value={num1}
					keyboardType="numeric"
				/>
				<TextInput
					style={styles.input}
					onChangeText={num2 => setNum2(num2)}
					value={num2}
					keyboardType="numeric"
				/>
			</View>
			<View style={styles.buttoncont}>
				<Button title="+" onPress={addition} />
				<Button title="-" onPress={subtraction} />
				<Button title="History" onPress={() => navigate('History', {history: history})} />
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
	input: {
		borderColor: 'grey',
		borderWidth: 1,
		width: 200
	}
});
