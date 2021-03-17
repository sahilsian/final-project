import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authprovider';
import { Button, Text } from 'react-native';
import Center from '../components/center';
import CustomButton from '../components/button';
import Profile from '../components/profile';
import Avatar from '../components/avatar';
import Language from '../components/language';
import LanguagePost from '../components/languagePost';

const Stack = createStackNavigator()


//---- Screen Creation:
const Login = ({navigation}) => {
    const {login} = useContext(AuthContext);
    return (
        <Center>
            <Text>Login</Text>
            <Button 
                title="login" 
                onPress={()=> {
                    login();
                }}
            />
            <Button 
                title="logout" 
                onPress={()=> {
                    logout();
                }}
            />
            <Button 
                title="Test" 
                onPress={()=> {
                    navigation.navigate('Test')
                }}
            />
        </Center>
    )
}
const Register = () => {
    return (
        <Center>
            <Text>Register</Text>
        </Center>
    )
}
const Test = () => {
    return (
        <Center>
            {/* <LanguagePost/>
            <Language/> */}
            <Profile></Profile>
        </Center>
    )
}
//---- End Screen Creation

//Screens under stack navigator
const AuthScreens = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
                name='Login' 
                component={Login} 
            />
            <Stack.Screen 
                name='Register' 
                component={Register} 
            />
            <Stack.Screen 
                name='Test' 
                component={Test} 
            />
        </Stack.Navigator>
    )
}

export default AuthScreens