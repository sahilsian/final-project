import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authprovider';
import { Button, Text } from 'react-native';
import Center from '../components/center';

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
        </Stack.Navigator>
    )
}

export default AuthScreens