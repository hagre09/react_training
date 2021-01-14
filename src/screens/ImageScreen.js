import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../Components/ImageDetails.js';

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetails/>
            <ImageDetails/>
            <ImageDetails/>
            <ImageDetails/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;