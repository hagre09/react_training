import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../Components/ImageDetails.js';

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetails 
                title="Forest" 
                imageSource={require('../../assets/images/forest.jpg')}
                score={9}
            />
            <ImageDetails 
                title="Beach" 
                imageSource={require('../../assets/images/beach.jpg')}
                score={7}
            />
            <ImageDetails 
                title="Mountain" 
                imageSource={require('../../assets/images/mountain.jpg')}
                score={10}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;