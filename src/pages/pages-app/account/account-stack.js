import React from 'react';
import Center from '../../../components/center';
import { Text,View,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function Content() { 
    return (
        <Center>
            <Text>
                Content
            </Text>
        </Center>
    );
}

const createAccountStack = ({navigation}) => {
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
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <TouchableOpacity onPress={() => {
                                    navigation.toggleDrawer();
                                }}>
                                    <Ionicons 
                                    name="menu-outline"
                                    style={{
                                        fontSize: 26,
                                        color: "#613EEA",
                                        marginRight: 8,
                                    }}
                                    ></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    
                                }}>
                                    <Ionicons 
                                    name="notifications-outline"
                                    style={{
                                        fontSize: 22,
                                        color: "#613EEA",
                                        marginLeft: 8,
                                    }}
                                    ></Ionicons>
                                </TouchableOpacity>
                            </View>
                            
                        )
                    },
                }} 
            />
            
        </Stack.Navigator>
    )
}

const AccountStack = ({navigation}) => {
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: "#613EEA",
                
            }}
            drawerPosition={"right"}

        >
            <Drawer.Screen name="Profile" children={createAccountStack} />
            <Drawer.Screen name="Settings" component={Content} />
        </Drawer.Navigator>
    );
}

export default AccountStack