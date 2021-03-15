import React, { useState } from 'react';
import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

const StyledButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    margin: 15px 0px;
    background-color: #ffffff;
    padding: 15px 0px;
    border-radius: 20px;
    border: 3px solid #8676FB;
    elevation: 11;
    shadow-color: #000;
    shadowOffset: {
        width: 0px,
        height: 5px,
    };
    shadow-radius: 6.68px;
`;

const ButtonText = styled.Text`
    color: #8676FB;
    font-weight: bold;
    font-size: 16px;
`;

const CustomSecondaryButton = ({title, onPress}) => {
    return (
        <StyledButton onPress={onPress}>
                <ButtonText>{title}</ButtonText>
        </StyledButton>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
            
        elevation: 11,
        width: "100%",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 20
    }
});

CustomSecondaryButton.defaultProps = {
    title: "Hello World"
}

export default CustomSecondaryButton