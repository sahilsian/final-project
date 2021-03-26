import React from 'react';
import styled from 'styled-components/native';
import Avatar from '../avatar';
import { Text, View, Image, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LanguageCont = styled.View`
align-items: center;
border-radius: 6px;
width: 100%;
margin: 15px 0px;
padding: 0px 15px;
`;

const Margin = styled.View`
    width: 100%;
`;

const LanguageHeader = styled.View`
align-items: center;
width: 100%;
flexDirection: row;
`;


const Header = styled.Text`
font-weight: bold;
font-size: 24px;
color: #ffffff ;
`;

const AvatarCont = styled.View`
    width: 22px;
    height: 22px;
`;

const TextCont = styled.View`
width: 100%;
flexDirection: row;
alignItems: flex-start;
padding: 15px 0px;
`;

const LanguageText = styled.Text`
display: flex;
font-weight: normal;
color: #ffffff ;
font-size: 14px;
`;

const CommentLine = styled.View`
alignItems: center;
height: 0px;
border: 2px solid rgba(255, 255, 255, 0.3);
border-radius: 1px;
margin: 10px 0px;
`;

const CommentCont = styled.View`
align-items: center;
padding: 20px 0px;
width: 100%;
flexDirection: row;
`;
const CommentView = styled.View`
    alignItems: flex-start;
    margin-left: 10px;
`;

const CommentTextAuthor = styled.Text`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
`;

const CommentText = styled.Text`
    font-size: 12px;
    color: #fff;
`;

const UserTitle = styled.View`
    width: 100%;
    padding-bottom: 10px;
    flex-direction: row;
    align-items: center;
`;

const UserName = styled.Text`
    font-size: 12px;
    color: #fff;
    margin-left: 5px;
    font-weight: bold;
`;

const Touch = styled.TouchableOpacity`
    display: ${props=>props.display ? "none": "flex"}
`;

const TouchTwo = styled.TouchableOpacity`

`;

const LanguagePost = ({comment, img, display, onCommentPress, onUserPress, description, word, example, user, name, children, navigation}) =>{
    return(
        <LanguageCont>

            <LinearGradient
                colors={['#8676FB', '#AB7BFF']}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={styles.linearGradient}
            >
            <Margin>
                <TouchTwo onPress={onUserPress}>

                <UserTitle>

                    <AvatarCont>
                            <Avatar 
                            size={"100%"}
                            img_link={img}
                            />
                    </AvatarCont>
                        <UserName>{name}</UserName>

                </UserTitle>
                </TouchTwo>

                <LanguageHeader>

                    <Header>{word}</Header>
                    
                </LanguageHeader>
                <TextCont>
                    <LanguageText>{description}</LanguageText>
                </TextCont>
                
                <CommentCont>
                <Touch display={display} onPress={onCommentPress}>
                <Ionicons 
                                name="chatbubble-ellipses"
                                style={{
                                    fontSize: 24,
                                    color: "#FFFFFF",
                                    
                                }}
                                ></Ionicons>

                </Touch>
                
                </CommentCont>
            </Margin>

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
      borderRadius: 20,
      padding: 15,
    }
});

LanguagePost.defaultProps = {
    word: "Language",
    description:"a system of words and grammar used by a group of people",
    example:"He taught foreign languages",
    user: "Ann",
    comment : "I like this word as well!",
    name: "John Smith"
}
export default LanguagePost;