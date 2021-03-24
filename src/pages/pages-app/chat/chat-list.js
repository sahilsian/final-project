import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Center from '../../../components/center';
import { FlatList } from 'react-native-gesture-handler';
import faker from 'faker';
import { NavigationContainer } from '@react-navigation/native';

const ChatList = ({navigation}) => {
    return (
        <Center>
            <FlatList
            style={{ 
                width: "100%",
                backgroundColor: "none"
             }}
            renderItem={ ({ item }) => {
                return (
                <View
                    style={{
                        alignItems: 'center',
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}
                >
                    <Button title={item} onPress={() => {
                        navigation.navigate("UserChat", {
                            name: item
                        });
                    }}></Button>
                </View>
                )
            }}
            keyExtractor={(product, idx) => product + idx}
            data={Array.from(Array(50), () => faker.name.firstName())} 
            />
        </Center>
    )
};
  
export default ChatList;