import React from 'react';
import styled from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

const StyledButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

const CustomButton = ({title}) => {
    return (
        <StyledButton>
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
      width: "100%",
      alignItems: "center",
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 20
    }
});

CustomButton.defaultProps = {
    title: "Hello World"
}

export default CustomButton