import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../avatar';
import { Text, View, Image, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react'


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
margin-left: 20px;
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


`;
const CommentNum = styled.Text`
color: #FFFFFF;
margin-left: 10px;

`;

const Saved = styled.View`
position: relative;
left: 105px;

`;



const Language = ({description, word, example}) =>{

    const [bookmark, setBookmark]= useState("bookmark-outline") //change the saved icon fill
    return(
        <LanguageCont>
            <LinearGradient
                colors={['#8676FB', '#AB7BFF']}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={styles.linearGradient}
            >
                <LanguageHeader>
                    <Avatar size={35}/>
                    <Header>{word}</Header>
                </LanguageHeader>
                <TextCont>
                    <Ionicons name="star-outline" size="large" color="white"></Ionicons>
                    <LanguageText>{description}</LanguageText>
                </TextCont>
                <TextCont>
                    <Ionicons name="bulb-outline" size="large" color="white"></Ionicons>
                    <LanguageText>{example}</LanguageText>
                </TextCont>
                <IconsCont>
                    <CommentCont>
                    <Ionicons name="chatbox-outline" size="25" color="white"></Ionicons>
                        <CommentNum>See Comments</CommentNum>
                    </CommentCont>
                    <Saved>
                    <Ionicons onPress={()=>{
                       if (bookmark === "bookmark-outline") {
                           setBookmark("bookmark")
                       } else {
                           setBookmark("bookmark-outline")
                       }
                    }}name={bookmark} size="25" color="white"></Ionicons>
                    </Saved>
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
    word: "Language",
    description:"a system of words and grammar used by a group of people",
    example:"He taught foreign languages"
}
export default Language;