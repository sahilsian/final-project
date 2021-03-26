import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authprovider';
import { Button, Text } from 'react-native';
import Center from '../components/center';
import NavTabs from '../components/navtabs';
import ConditionalProfilePage from '../pages/pages-app/account/conditional-profile-page';

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
            <Stack.Screen
            name="User-Profile"
            component={ConditionalProfilePage}
            options={{
                title: "Profile",
                headerTintColor: '#613EEA'
            }}
            />
        </Stack.Navigator>
    )
}

export default AppScreens