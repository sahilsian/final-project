import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import PostPage from './post-page';

const Stack = createStackNavigator();


const PostStack = ({navigation}) => {
    return (
        <Stack.Navigator 
        >
            <Stack.Screen 
                name="Post"
                component={PostPage}
                options={{headerTintColor: '#613EEA'}}
            />
        </Stack.Navigator>
    );
}

export default PostStack