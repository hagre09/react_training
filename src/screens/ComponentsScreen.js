import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = "Hagr";
    return (
    <View>
        <Text style= {Styles.textStyle}>Gitting started with React Native</Text>
        <Text style= {Styles.subHeaderStyle}>My name is {name}</Text>
    </View>
    );
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;