import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import styled from 'styled-components'
import Center from '../../../components/center'
import Profile from '../../../components/profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';



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

const ProfilePage = () => {

    const [resdata, setResData] = useState('')

    const GetProfile = async(user) => {
        axios({
            method: 'get',
            url: `http://10.0.2.2:8080/api/users/${user}`
        })

        .then((res)=> {
            setResData(res.data.result[0])
            console.log('yay', resdata)
        })
    }

    useEffect(()=> {
        AsyncStorage.getItem("user")
        .then((value)=> {
            const data = JSON.parse(value)
            console.log(data.id);
            GetProfile(data.id)
        });

        
    }, [])

    return (
        <View>
            <Profile
            follower={resdata.user_followers}
            following={resdata.user_following}
            username={resdata.fullname}
            id={resdata.id}
            bio={resdata.bio}
            display
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
        </View>
    )
}


var style = StyleSheet.create({
    star: {        
        color: "#A17AFE",
        fontSize: 16,
      },


});

export default ProfilePage