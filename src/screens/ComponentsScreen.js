import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    // const greeting = "Bye thir";
    const greeting = <Text>Bye thir</Text>;

    return (
    <View>
        <Text style= {Styles.textStyle}>This is the Components Screen</Text>
        {/* <Text>{greeting}</Text> */}
        {greeting}
    </View>
    );
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;