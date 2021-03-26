import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../avatar';
import {View, Text} from 'react-native';

const TagCont = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 343px;
height: 84px;
padding: 20px;
background-color: #F3EDFF;
border-radius: 12px;
`;

const TagID = styled.View`
width: 60%;
display: flex;
align-items: center;
justify-content: center;
`;

const TagAvatar = styled.View`
width: 39px;
height: 39px;
padding-right: 20px;
`;
const UserName = styled.Text`
font-family: Rubik;
font-style: normal;
font-size: 14px;
`;

const ArrowButton = styled.View`
width: 40%;
display: flex;
align-items: center;
justify-content: end;
`;

const ProfileTag = (username) =>{
    return(
        <TagCont>
            <TagID>
                <TagAvatar>
                    <Avatar size='100%'/>
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

