import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AsyncStorage, FlatList, Text, View } from 'react-native';
import Center from '../../components/center';
import LanguagePost from '../../components/languagePost';
import axios from 'axios';
import CommentPost from '../../components/comment';

const HomePage = () => {

    const [data, setData] = useState('')

    const CallPosts = async() => {
        
    }

    useEffect(()=> {
        axios({
            method: 'get',
            url: 'http://10.0.2.2:8080/api/posts'
        })

        .then(e => {
            setData(e.data.result)
            console.log("hello", data)
        })
        
        .catch(e => {
            console.log('error', e)
        });
        
    }, [])

    return (
        <View>

            {data !== '' ?
            <FlatList
                style={{ 
                    width: "100%",
                    backgroundColor: "none"
                }}
                renderItem={ ({ item }) => {
                    return (
                        <LanguagePost
                            word={item.post_title}
                            description={item.post_description}
                            name={item.fullname}
                        >
                            <CommentPost

                            >
                            </CommentPost>
                        </LanguagePost>
                    )
                }}
                data={data}
            >

            </FlatList>
            :
            <Text>Hello</Text>
            }
        </View>
        
            
    )
}

export default HomePage