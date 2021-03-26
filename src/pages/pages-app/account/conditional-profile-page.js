import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import styled from 'styled-components'
import Center from '../../../components/center'
import Profile from '../../../components/profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import LanguagePost from '../../../components/languagePost'
import { FlatList } from 'react-native-gesture-handler'



const LgLevel = styled.View`
    flex-direction: row;
`;

const NativeLg = styled.Text`
    margin-top: 15px;
    font-weight: bold;
`;

const LearningLg = styled.Text`
    margin-top: 15px;
    font-weight: bold;
`;

const NativeStars = styled.Text`
    margin-left: 10px;
    margin-top: 15px;
`;

const ConditionalProfilePage = ({route}) => {
    let userid = route.params.id

    const [resdata, setResData] = useState('')
    const [postdata, setPostData] = useState('')
    const GetProfile = async() => {
        console.log(userid)
        axios({
            method: 'get',
            url: `http://10.0.2.2:8080/api/users/${userid}`
        })

        .then((res)=> {
            setResData(res.data.result[0])
            console.log('yay', resdata)
        })
    }

    const GetPosts = async() => {
        axios({
            method: 'get',
            url: `http://10.0.2.2:8080/api/users/posts/${userid}`
        })

        .then((res)=> {
            setPostData(res.data.result)
            console.log('lol', postdata)
        })
    }

    useEffect(()=> {
        GetProfile()
        GetPosts()
        
    }, [])

    return (
        <View>
            <Profile
            follower={resdata.user_followers}
            following={resdata.user_following}
            username={resdata.fullname}
            id={resdata.id}
            bio={resdata.bio}
            img={resdata.avatar}
            >

            <LgLevel>
                    <NativeLg>{resdata.fluent_language}</NativeLg>
                    <NativeStars>

                    {[...Array(resdata.fluent_level)].map((e, i)=> {
                            return <Ionicons name="star" style={style.star} size="large"></Ionicons>
                        })}
                    
                    </NativeStars>
                </LgLevel>
                <LgLevel>
                    <LearningLg>{resdata.learning_language}</LearningLg>
                    <NativeStars>
                        {[...Array(resdata.learning_level)].map((e, i)=> {
                            return <Ionicons name="star" style={style.star} size="large"></Ionicons>
                        })}
                        
                    </NativeStars>
                </LgLevel>

            </Profile>
            <FlatList
                data={postdata}
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
            >

            </FlatList>
        </View>
    )
}


var style = StyleSheet.create({
    star: {        
        color: "#A17AFE",
        fontSize: 16,
      },


});

export default ConditionalProfilePage