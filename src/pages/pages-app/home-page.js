import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AsyncStorage, FlatList, Text, View } from 'react-native';
import Center from '../../components/center';
import LanguagePost from '../../components/languagePost';
import axios from 'axios';
import CommentPost from '../../components/comment';

const HomePage = ({navigation }) => {

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
                    console.log("lol", item)
                    return (
                        <LanguagePost
                            word={item.post_title}
                            description={item.post_description}
                            name={item.fullname}
                            img={item.avatar}
                            onCommentPress={()=> navigation.navigate('Individual-Post', {
                                id: item.id_post
                            })}
                            onUserPress={()=> {
                                navigation.navigate('User-Profile', {
                                    id: item.post_author
                                })
                            }}
                        >
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