import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter.js';

const Color_Increment = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setRed(red + Color_Increment)} 
                onDecrease={() => setRed(red - Color_Increment)} 
                color="Red"
            />
            
            <ColorCounter 
                onIncrease={() => setGreen(green + Color_Increment)} 
                onDecrease={() => setGreen(green - Color_Increment)} 
                color="Green"
            />
            <ColorCounter 
                onIncrease={() => setBlue(blue + Color_Increment)} 
                onDecrease={() => setBlue(blue - Color_Increment)} 
                color="Blue"
            />
            <View
                style ={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;