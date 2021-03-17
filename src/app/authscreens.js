import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './authprovider';
import { Button, Text } from 'react-native';
import Center from '../components/center';
import CustomButton from '../components/button';
import Profile from '../components/profile';
import Avatar from '../components/avatar';
import StartPage from '../pages/pages-auth/start-page';
import LoginCredentials from '../pages/pages-auth/login-page';
import CreateAccount from '../pages/pages-auth/create-account-page';
import ChooseLanguage from '../pages/pages-auth/choose-lang-page';
import Completion from '../pages/pages-auth/completion-page';
import CustomProfile from '../components/profile';
import CustomAvatar from '../components/avatar';
import Language from '../components/language';
import LanguagePost from '../components/languagePost';

const Stack = createStackNavigator()


//---- Screen Creation:
// const Login = ({navigation}) => {
//     const {login} = useContext(AuthContext);
//     return (
//         <Center>
//             {/* <Text>Login</Text>
//             <Button 
//                 title="login" 
//                 onPress={()=> {
//                     login();
//                 }}
//             />
//             <Button 
//                 title="logout" 
//                 onPress={()=> {
//                     logout();
//                 }}
//             />
//             <Button 
//                 title="Test" 
//                 onPress={()=> {
//                     navigation.navigate('Test')
//                 }}
//             /> */}
//             <StartPage></StartPage>
//         </Center>
//     )
// }
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
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerTintColor: '#613EEA'
            }}
        >
            <Stack.Screen
                options={{headerShown: false}}
                name='Login' 
                component={StartPage} 
            />
            <Stack.Screen 
                name='Register' 
                component={CreateAccount}
                options={{title: 'Create an Account'}}
            />

            <Stack.Screen
                name='LoginCred'
                component={LoginCredentials}
                options={{title: 'Sign in'}}
            />

            <Stack.Screen
                name='ChooseLanguage'
                component={ChooseLanguage}
                options={{title: 'Select Languages'}}
            />

            <Stack.Screen
                name='Completion'
                component={Completion}
                options={{title: 'Success!'}}
            />

        </Stack.Navigator>
    )
}

export default AuthScreens