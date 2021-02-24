import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Center from '../center';
import { Text } from 'react-native';

const Nav = createBottomTabNavigator();

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

const NavTabs = () => {
    return (
        <Nav.Navigator>
            <Nav.Screen name="Home" component={Home} />
            <Nav.Screen name="Search" component={Search} />
        </Nav.Navigator>
    )
};

NavTabs.defaultProps = {

};

export default NavTabs;