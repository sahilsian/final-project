import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Center from '../../components/center';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Content() { 
    return (
        <Center>
            <Text>
                Content
            </Text>
        </Center>
    );
}

const SearchStack = ({}) => {
    return (
        <Stack.Navigator 
        >
            <Stack.Screen 
                name="Search"
                component={Content}
                options={{
                    headerTintColor: '#613EEA',
                    title: "Search"
                }} 
            />
        </Stack.Navigator>
    );
}

export default SearchStack