import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../Components/ImageDetails.js';

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetails 
                title="Forest" 
                imageSource={require('../../assets/images/forest.jpg')}
            />
            <ImageDetails 
                title="Beach" 
                imageSource={require('../../assets/images/beach.jpg')}
            />
            <ImageDetails 
                title="Mountain" 
                imageSource={require('../../assets/images/mountain.jpg')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;