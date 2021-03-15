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

const AvatarCont = styled.View`
width: 21px;
height: 21px;
`;

const Header = styled.Text`
font-weight: bold;
font-size: 24px;
color: #ffffff ;
margin-left: 5px;
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
margin-left: 5px;
margin-top: -3px;
`;

const IconsCont = styled.View`
width: 100%;
flexDirection: row;
alignItems: center;
padding: 20px;
`;

const CommentCont = styled.View`
flexDirection: row;
alignItems: center;
margin-right:200px;
`;
const CommentNum = styled.Text`
color: #FFFFFF;
`;

const Language = ({comment}) =>{
    return(
        <LanguageCont>
            <LinearGradient
                colors={['#8676FB', '#AB7BFF']}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={styles.linearGradient}
            >
                <LanguageHeader>
                    <AvatarCont>
                        <Avatar 
                            width= "100%"
                            height="100%"
                        />
                    </AvatarCont>
                    <Header>Language</Header>
                </LanguageHeader>
                <TextCont>
                    <Image
                        source={require("../../../assets/star1.png")}
                    />
                    <LanguageText>a system of words and grammar used by a group of people</LanguageText>
                </TextCont>
                <TextCont>
                    <Image
                        source={require("../../../assets/check.png")}
                    />
                    <LanguageText>He taught foreign languages</LanguageText>
                </TextCont>
                <IconsCont>
                    <CommentCont>
                        <Image
                            source={require("../../../assets/message.png")}
                        />
                        <CommentNum > {comment}</CommentNum>
                    </CommentCont>
                    <Image
                        source={require("../../../assets/bookmark.png")}
                    />
                </IconsCont>
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

Language.defaultProps = {
    comment : "3",
}
export default Language;