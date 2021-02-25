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

const HomeStack = ({}) => {
    return (
        <Stack.Navigator 
        >
            <Stack.Screen 
                name="Content"
                component={Content}
                options={{
                    headerTintColor: '#613EEA',
                    headerRightContainerStyle: {
                        paddingRight: 36
                    },
                    headerRight: ()=> {
                        return (
                            <TouchableOpacity>
                                <Ionicons 
                                name="chatbubbles"
                                style={{
                                    fontSize: 24,
                                    color: "#613EEA"
                                }}
                                ></Ionicons>
                            </TouchableOpacity>
                        )
                    },
                    title: "PenPal"
                }} 
            />
        </Stack.Navigator>
    );
}

export default HomeStack