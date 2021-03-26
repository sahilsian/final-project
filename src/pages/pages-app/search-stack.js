import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Center from '../../components/center';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import ProfileTag from '../../components/profile-tag';

const Stack = createStackNavigator();

const Cont = styled.View`
`;

function Content({navigation}) { 

    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=> {
        axios({
            method: "get",
            url: "http://10.0.2.2:8080/api/users"
        })

        .then(e => setData(e.data.result));

        
    }, [])

    useEffect(()=> {
        const results = data.filter(person =>
            person.fullname.includes(value)
        );
        setSearchResults(results);
        console.log(searchResults)
    }, [value])
    
    return (
        <Cont>
            <SearchBar
                placeholder="Type Here..."
                platform={"ios"}
                value={value}
                onChangeText={(e)=> setValue(e)}
            />
            {searchResults === [] ?

                <FlatList
                data={data}
                style={{ 
                    width: "100%",
                    backgroundColor: "none"
                }}

                renderItem={({ item }) => {
                    return (
                        <ProfileTag
                            username={item.fullname}
                            img={item.avatar}
                            onPress={()=> {
                                navigation.navigate('User-Profile', {
                                    id: item.id
                                })
                            }}
                        >

                        </ProfileTag>
                    )
                }}
                >

                </FlatList>

                :

                <FlatList
                data={searchResults}
                style={{ 
                    width: "100%",
                    backgroundColor: "none"
                }}

                renderItem={({ item }) => {
                    return (
                        <ProfileTag
                            username={item.fullname}
                            onPress={()=> {
                                navigation.navigate('User-Profile', {
                                    id: item.id
                                })
                            }}
                        >

                        </ProfileTag>
                    )
                }}
                >

                </FlatList>

            }
            

            


        </Cont>
    );
}

const SearchStack = ({}) => {
    return (
        <Stack.Navigator 
        >
            <Stack.Screen 
                name="Search"
                component={Content}
                options={{
                    headerTintColor: '#613EEA',
                    title: "Search"
                }} 
            />
        </Stack.Navigator>
    );
}

export default SearchStack