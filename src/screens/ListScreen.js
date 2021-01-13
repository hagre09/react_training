import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const Frindes = [
        { name: 'Frinde #1' },
        { name: 'Frinde #2' },
        { name: 'Frinde #3' },
        { name: 'Frinde #4' },
        { name: 'Frinde #5' },
        { name: 'Frinde #6' },
        { name: 'Frinde #7' },
        { name: 'Frinde #8' },
        { name: 'Frinde #9' },
    ];
    return (
        <FlatList
            keyExtractor= {Frindes=>Frindes.name}
            data={Frindes}
            renderItem={({item}) =>{
                return <Text>{item.name}</Text>
            }}
        />
    );
};

const Styles = StyleSheet.create({});

export default ListScreen;