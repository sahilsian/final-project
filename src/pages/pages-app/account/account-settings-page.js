import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Avatar from '../../../components/avatar';
import { Header } from 'react-native-elements';
import CustomInput from '../../../components/Input';
import LanguageDropdown from '../../../components/language-dropdown';
import CustomButton from '../../../components/button';
import { AsyncStorage } from 'react-native';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Container = styled.View`
`;

const AvatarBox = styled.View`
    padding: 25px 15px;
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-width: 1;
`;

const RegularBox = styled.View`
    padding: 25px 15px;
    border-bottom-color: #dbdbdb;
    border-bottom-width: 1;
`;

const EditProfile = styled.Text`
    color: #613EEA;
`

const EditTouch = styled.TouchableOpacity`
    margin: 7px 0px;
`;

const AccountSettings = ({navigation}) => {

    const [resdata, setResData] = useState('')
    const [image, setImage] = useState(null);
    const [bio, setBio] = useState('')
    const [id, setId] = useState('')

    const setProfile = async(bio, image) => {

        axios({
            method: 'post',
            url: `http://10.0.2.2:8080/api/users/edit/${id}`,
            data: {
                bio: bio,
                avatar: image
            }
        })

        .then((res)=> {
            navigation.navigate('Profile')

        })
    }

    const GetProfile = async(user) => {
        axios({
            method: 'get',
            url: `http://10.0.2.2:8080/api/users/${user}`
        })

        .then((res)=> {
            setResData(res.data.result[0])
            console.log('yay', resdata)
            setImage(resdata.avatar)
        })
    }

    useEffect(()=> {
        AsyncStorage.getItem("user")
        .then((value)=> {
            const data = JSON.parse(value)
            console.log(data.id);
            GetProfile(data.id)
            setId(data.id)
        });

        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
        })();
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return (
        <Container>
            <Header
                rightComponent={{ icon: 'menu', color: '#613EEA', onPress: ()=> {navigation.toggleDrawer();} }}
                leftComponent={{ text: 'Settings', style: { color: '#613EEA', fontWeight: '700', fontSize: 18, paddingLeft: 4 } }}
                containerStyle={{
                    backgroundColor: '#ffffff',
                    height: 80
                  }}
            />
            <AvatarBox>
            {image && <Avatar img_link={image}></Avatar> }
                <EditTouch onPress={pickImage}>
                    <EditProfile >Edit Avatar</EditProfile>
                </EditTouch>
            </AvatarBox>
            <RegularBox>

                <CustomInput onChange={(e)=> {
                    setBio(e)
                }} multiline={true} title={"Set Bio"} numberOfLines={3} placeholder={"Type something about you"}></CustomInput>
               
                
            </RegularBox>
            <RegularBox>
            <CustomButton title={"Save"} onPress={()=> {
                setProfile(bio, image)
            }}></CustomButton>

            </RegularBox>
        </Container>
    )
}

export default AccountSettings