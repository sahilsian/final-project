import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';
import Avatar from '../avatar';


const SavedItemCont = styled.TouchableOpacity`
    width: 100%;
    height: 83px;
`;


const TextBox = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    width: 75%;

`;

const IconBox = styled.View`
    width: 30px;
    height: 30px;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
    
`;

const Container = styled.View`
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
    width: 95%;
    height: 100%;
`;




const SavedItem = ({title}) => {
    return (
        <SavedItemCont>
            <LinearGradient 
            colors={['#8676FB', '#AB7BFF']}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.8, y: 1 }}
            style={styles.linearGradient}
            >
                <Container>
                <TextBox>{title}</TextBox>
                <IconBox>
                    <Ionicons name="chevron-forward-outline" style={styles.arrow} size="large"></Ionicons>
                </IconBox>
                </Container>
            </LinearGradient>
        </SavedItemCont>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      arrow: {
        color: "white",
        fontSize: 24,
    }
});

SavedItem.defaultProps = {
    title: "What are some polite ways to say hello in Japanese?"
}

export default SavedItem