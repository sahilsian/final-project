import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../avatar';
import {View, Text, Image} from 'react-native';

const TagCont = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 84px;
background-color: #FFFFFF;
border-radius: 12px;
flex-direction: row;
border-bottom-width: 1;
border-bottom-color: #eee;
`;

const TagID = styled.View`
width: 60%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;

const TagAvatar = styled.View`
width: 45px;
height: 45px;
margin-right: 15px;
`;
const UserName = styled.Text`
font-family: Rubik;
font-style: normal;
font-size: 14px;
font-weight: bold;
`;

const ArrowButton = styled.View`
width: 40%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const ProfileTag = ({username, onPress, img}) =>{
    return(
        <TagCont onPress={onPress}>
            <TagID>
                <TagAvatar>
                    <Avatar img_link={img} size='100%'/>
                </TagAvatar>
                <View>
                    <UserName>{username}</UserName>
                </View>
            </TagID>
            <ArrowButton>
                <Image 
                    source={require("../../../assets/back.png")}
                />
            </ArrowButton>               
        </TagCont>
    )
}

ProfileTag.defaultProps = {
    username:'Mary Williams'
}
export default ProfileTag;

