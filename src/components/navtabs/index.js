import React, { useState } from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Center from '../center';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from '../../pages/pages-app/home-stack';
import SearchStack from '../../pages/pages-app/search-stack';
import AccountStack from '../../pages/pages-app/account/account-stack';
import PostStack from '../../pages/pages-app/post/post-stack';

const Nav = createBottomTabNavigator();

//---- Screen Creation:
function Home() {
    return (
        <Center>
            <Text>Home</Text>
        </Center>
    )
}

function Search() {
    return (
        <Center>
            <Text>Search</Text>
        </Center>
    )
}

function Post() {
    return (
        <Center>
            <Text>Post</Text>
        </Center>
    )
}

function Profile() {
    return (
        <Center>
            <Text>Profile</Text>
        </Center>
    )
}
//---- End Screen Creation

//Navigation through bottom tabs
const NavTabs = () => {
    return (
        <Nav.Navigator
            tabBarOptions={{
            activeTintColor: '#613EEA',
            inactiveTintColor: '#C2B2FF',
            showLabel: false,
            tabStyle: {
                justifyContent: 'center'
            }
            }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused
                        ? 'search'
                        : 'search-outline'
                    } else if (route.name === 'Post') {
                        iconName = focused
                        ? 'create'
                        : 'create-outline'
                    }  else if (route.name === 'Profile') {
                        iconName = focused 
                        ? 'person'
                        : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>

                }
            })}
          >
            <Nav.Screen name="Home" component={HomeStack} />
            <Nav.Screen name="Post" component={PostStack} />
            <Nav.Screen name="Search" component={SearchStack} />
            <Nav.Screen name="Profile" component={AccountStack} />

        </Nav.Navigator>
    )
};


export default NavTabs;