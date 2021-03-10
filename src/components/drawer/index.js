import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

function Settings() {
    return (
        <Text>Settings</Text>
    )
}

const AccountDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="settings" component={Settings} />
        </Drawer.Navigator>
    )
};

AccountDrawer.defaultProps = {

};

export default AccountDrawer;