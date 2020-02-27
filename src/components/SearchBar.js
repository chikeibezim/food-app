import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {


	return (
		<View style={styles.background}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput 
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle} 
				placeholder="Search" 
				value={term}
				onChangeText={newTerm => onTermChange(newTerm)}
				onEndEditing={() => onTermSubmit()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({

	background: {
		marginTop: 15,
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		//display all view child on same line
		flexDirection: 'row'
	},

	inputStyle: {
		//borderColor: 'black',
		//borderWidth: 1,
		//Makw TextInput stretch to end
		flex: 1,
		fontSize: 18
	},

	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;