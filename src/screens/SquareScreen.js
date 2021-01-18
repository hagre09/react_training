import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter.js';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return <View>
        <ColorCounter 
            onIncrease={() => setRed(red + 1)} 
            onDecrease={() => setRed(red - 1)} 
            color="Red"
        />

        <ColorCounter color="Green" />
        <ColorCounter color="Blue" />

    </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;