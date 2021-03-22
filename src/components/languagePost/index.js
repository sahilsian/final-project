import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../avatar';
import { Text, View, Image, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

const LanguageCont = styled.View`
align-items: center;
border-radius: 6px;
width: 303px;
min-height: 209px;
`;

const LanguageHeader = styled.View`
align-items: center;
padding: 20px;
width: 100%;
flexDirection: row;
`;

const Header = styled.Text`
font-weight: bold;
font-size: 24px;
color: #ffffff ;
margin-right: 120px;
`;

const AvatarCont = styled.View`
width: 29px;
height: 29px;
`;

const TextCont = styled.View`
width: 100%;
padding: 10px 20px 10px 20px;
flexDirection: row;
alignItems: flex-start;
`;

const LanguageText = styled.Text`
display: flex;
font-weight: normal;
color: #ffffff ;
font-size: 12px;
padding: 3px;
margin-left: 5px;
margin-top: -3px;
`;

const CommentLine = styled.View`
alignItems: center;
width: 263px;
height: 0px;
border: 2px solid rgba(255, 255, 255, 0.3);
border-radius: 1px;
margin:30px;
`;

const CommentCont = styled.View`
align-items: center;
padding: 20px;
width: 100%;
flexDirection: row;
`;
const CommentText = styled.View`
alignItems: flex-start;
`;

const LanguagePost = ({comment,description, word, example, user}) =>{
    return(
        <LanguageCont>
            <LinearGradient
                colors={['#8676FB', '#AB7BFF']}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={styles.linearGradient}
            >
                <LanguageHeader>
                    <Header>{word}</Header>
                    <AvatarCont>
                        <Avatar 
                            width= "100%"
                            height="100%"
                        />
                    </AvatarCont>
                </LanguageHeader>
                <TextCont>
                    <Image
                        source={require("../../../assets/star1.png")}
                    />
                    <LanguageText>{description}</LanguageText>
                </TextCont>
                <TextCont>
                    <Image
                        source={require("../../../assets/check.png")}
                    />
                    <LanguageText>{example}</LanguageText>
                </TextCont>
                <CommentLine/>
                <CommentCont>
                <AvatarCont>
                        <Avatar 
                            width= "100%"
                            height="100%"
                        />
                    </AvatarCont>
                    <CommentText>
                        <LanguageText>Ann</LanguageText>
                        <LanguageText>I like this word as well!</LanguageText>
                    </CommentText>
                </CommentCont>
                <CommentCont>
                    <AvatarCont>
                        <Avatar 
                            width= "100%"
                            height="100%"
                        />
                    </AvatarCont>
                    <CommentText>
                        <LanguageText>{user}</LanguageText>
                        <LanguageText>{comment}</LanguageText>
                    </CommentText>
                </CommentCont>
            </LinearGradient>
        </LanguageCont>
    )
};
var styles = StyleSheet.create({
    linearGradient: {
      width: "100%",
      alignItems: "center",
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 20
    }
});

LanguagePost.defaultProps = {
    word: "Language",
    description:"a system of words and grammar used by a group of people",
    example:"He taught foreign languages",
    user: "Ann",
    comment : "I like this word as well!"
}
export default LanguagePost;