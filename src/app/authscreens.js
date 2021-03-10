import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authprovider';
import { Button, Text } from 'react-native';
import Center from '../components/center';
import CustomButton from '../components/button';
import CustomProfile from '../components/profile';
import CustomAvatar from '../components/avatar';

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
            <CustomButton></CustomButton>
            <Text></Text>
            <CustomProfile></CustomProfile>
            <Text></Text>
            <CustomAvatar></CustomAvatar>
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