import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, ActivityIndicator, AsyncStorage } from 'react-native';
import Center from '../components/center'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './authprovider';
import NavTabs from '../components/navtabs'

//Creating stack navigation for navigation via react-navigation
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

//Creating Routes for each page in application
const Routes = ({}) => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

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

    if (loading) {
        return (
            <Center>
                <ActivityIndicator color="#9F79FE" size="large"/>
            </Center>
        );
    }

    return (
        <NavigationContainer>
            {user ? 
                <NavTabs></NavTabs>

            :
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
            }
        </NavigationContainer>
        
    )
}

export default Routes;