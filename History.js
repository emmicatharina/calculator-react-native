import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function History({ route }) {
	const { history } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.listcont}>
				<Text>History</Text>
				<FlatList
					data={history}
					renderItem={({ item }) => <Text>{item.key}</Text>}
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
	listcont: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});