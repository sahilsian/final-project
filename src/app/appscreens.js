import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authprovider';
import { Button, Text } from 'react-native';
import Center from '../components/center';
import NavTabs from '../components/navtabs';

const Stack = createStackNavigator()

//Screens under stack navigator
const AppScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="NavTab" 
            component={NavTabs}
            options={{
                headerShown: false
            }} 
            />
        </Stack.Navigator>
    )
}

export default AppScreens