import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Center from '../../components/center';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatList from './chat/chat-list';
import UserChat from './chat/chat';
import HomePage from './home-page';

const Stack = createStackNavigator();


const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator 
        >
            <Stack.Screen 
                name="Content"
                component={HomePage}
                options={{
                    headerTintColor: '#613EEA',
                    headerRightContainerStyle: {
                        paddingRight: 36
                    },
                    headerRight: ()=> {
                        return (
                            <View>

                            <TouchableOpacity onPress={()=> {
                                navigation.push('Messages')
                            }}>
                                <Ionicons 
                                name="chatbubbles-outline"
                                style={{
                                    fontSize: 24,
                                    color: "#613EEA",
                                    
                                }}
                                ></Ionicons>
                                
                            </TouchableOpacity>
                            </View>
                            
                        )
                    },
                    title: "PenPal"
                }} 
            />
            <Stack.Screen 
                name="Messages" 
                component={ChatList}
                options={{
                    headerTintColor: '#613EEA',
                }} 
            />
            <Stack.Screen 
                name="UserChat" 
                component={UserChat}
                options={({route}) => ({
                    headerTitle: route.params.name,
                    headerTintColor: '#613EEA',
                    headerRightContainerStyle: {
                        paddingRight: 36
                    },
                    headerRight: ()=> {
                        return (
                            <TouchableOpacity onPress={()=> {
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
                    }
                })} 
            />
        </Stack.Navigator>
    );
}

export default HomeStack