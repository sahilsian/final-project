import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Center from '../../components/center';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createDrawerNavigator();

function Content() { 
    return (
        <Center>
            <Text>
                Content
            </Text>
        </Center>
    );
}

const AccountStack = ({navigation}) => {
    return (
        <Stack.Navigator >
            <Stack.Screen 
                name="Account"
                component={Content}
                options={{
                    headerTintColor: '#613EEA',
                    title: "Profile",
                    headerRightContainerStyle: {
                        paddingRight: 36
                    },
                    headerRight: ()=> {
                        return (
                            <TouchableOpacity onPress={() => {
                                navigation.toggleDrawer();
                            }}>
                                <Ionicons 
                                name="menu"
                                style={{
                                    fontSize: 26,
                                    color: "#613EEA"
                                }}
                                ></Ionicons>
                            </TouchableOpacity>
                        )
                    },
                }} 
            />
        </Stack.Navigator>
        

        
    );
}

export default AccountStack