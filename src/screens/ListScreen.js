import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const Frindes = [
        { name: 'Frinde #1', age: 50 },
        { name: 'Frinde #2', age: 47 },
        { name: 'Frinde #3', age: 45 },
        { name: 'Frinde #4', age: 27 },
        { name: 'Frinde #5', age: 45 },
        { name: 'Frinde #6', age: 65 },
        { name: 'Frinde #7', age: 76 },
        { name: 'Frinde #8', age: 12 },
        { name: 'Frinde #9', age: 32 },
    ];
    return (
        <FlatList
            keyExtractor= {Frindes=>Frindes.name}
            data={Frindes}
            renderItem={({item}) =>{
                return (
                    <Text style={Styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }}
        />
    );
};

const Styles = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default ListScreen;