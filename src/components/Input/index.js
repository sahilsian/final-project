import React, { useState } from 'react';
import styled from 'styled-components/native';
import Center from '../center';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputContainer = styled.View`
    width: 100%;
    background-color: #fff;
    padding: 15px;
    border: 1px solid #eeeeee;
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.TextInput`
    background-color: #fff;
    flex: 1;
`;


const Title = styled.Text`
    padding: 10px 0px;
    color: #2E2727;
`;

const Wrapper = styled.View`
    width: ${props=>props.half ? "48%" : "100%"};
    padding: 6px 0px;
`;

const PasswordView = styled.TouchableOpacity`
    display: ${props=>props.display ? 'flex' : 'none'};
`;

const Error = styled.Text`
    color: #eb3434;
    margin: 4px 0px;
    font-size: 12px;
    display: ${props=>props.display ? "flex" : "none"}
`;

const CustomInput = ({placeholder, half, title, password, display, onChange}) => {
    const [iconname, setIconName] = useState('eye-off-outline')
    return (
        <Wrapper half={half}>
            <Title>{title}</Title>
            <InputContainer>
                <Input
                    placeholder={placeholder}
                    secureTextEntry={iconname == 'eye-off-outline' ? false : true}
                    onChange={onChange}
                />
                <PasswordView 
                display={password}
                onPress={()=> {
                    iconname == 'eye-off-outline' ?
                    setIconName('eye-outline')
                    :
                    setIconName('eye-off-outline')
                }}
                >
                    <Ionicons name={iconname} size={24}/>
                </PasswordView>
            </InputContainer>
            <Error display={display}>Username or Password is Incorrect</Error>
        </Wrapper>
        
    )
};

CustomInput.defaultProps = {
    placeholder: "Hello World",
    half: false,
    title: "Hello World",
    password: false
};

export default CustomInput;