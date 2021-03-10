import React, { useState } from 'react';
import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

const StyledButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    margin: 15px 0px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

const CustomButton = ({title, onPress}) => {
    return (
        <StyledButton onPress={onPress}>
            <LinearGradient 
            colors={['#8676FB', '#AB7BFF']}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.8, y: 1 }}
            style={styles.linearGradient}
            >
                <ButtonText>{title}</ButtonText>
            </LinearGradient>
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
        backgroundColor: "transparent",
        elevation: 11,
        width: "100%",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15
    }
});

CustomButton.defaultProps = {
    title: "Hello World"
}

export default CustomButton