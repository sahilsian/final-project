import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, ActivityIndicator, AsyncStorage } from 'react-native';
import Center from '../components/center'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './authprovider';
import AuthScreens from './authscreens'
import AppScreens from './appscreens';
//Creating stack navigation for navigation via react-navigation



//Creating Routes for each page in application
const Routes = ({}) => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    //Seeing if the user is already authenticated with local storage
    useEffect(() => {
        AsyncStorage.getItem('user')
        .then( res => {
            if (res) {
                login();
            } else {
                setLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });

    }, [])

    // loading indication when app loads specific screens
    if (loading) {
        return (
            <Center>
                <ActivityIndicator color="#9F79FE" size="large"/>
            </Center>
        );
    }

    return (
        <NavigationContainer>
            {/* Displays screens requiring auth or not requiring auth */}
            { 
            user ? 
            <AppScreens></AppScreens>
            : 
            <AuthScreens></AuthScreens> 
            }
        </NavigationContainer>
        
    )
}

export default Routes;