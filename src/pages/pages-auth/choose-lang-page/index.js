import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import CustomButton from '../../../components/button';
import axios from 'axios'
import Center from '../../../components/center';
import CustomInput from '../../../components/Input';
import ButtonFooter from '../../../components/button-footer';

import LanguageDropdown from '../../../components/language-dropdown';
import CustomSlider from '../../../components/slider';

const Cont = styled.View`
    flex: 1;
    width: 100%;
`;

const FlexWrap = styled.View`
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

const ButtonContainer = styled.View`
    width: 100%;
    padding-top: 80px;
`;

const ChooseLanguage = ({navigation, route}) => {
    const {email, fullname, password} = route.params;
    const [fluent, setFluent] = useState('')
    const [native, setNative] = useState('')
    const [level, setLevel] = useState(0)

    const HandleSignup = async(email, fullname, password, native, fluent, level) => {
        console.log(email, fullname, password, fluent, native, level)
        axios({
            method: 'post',
            url: 'http://10.0.2.2:8080/api/users/create',
            data: {
                email: email,
                fullname: fullname,
                password: password,
                fluent_language: fluent,
                learning_language: native,
                learning_level: level
            }
        })
        .then((res)=> {
            navigation.navigate('Completion', {
                email: res.email
            })
        })
        .catch((err)=> {
            console.log(err, "error")
        })
    }
    //navigation.navigate('Completion')

    return (
        <Cont>
            <Center>
                <LanguageDropdown onChange={e => {
                    setNative(e)
                    console.log(fluent.label, native.label, level)
                }}></LanguageDropdown>
                <LanguageDropdown onChange={e => {
                    setFluent(e)
                    console.log(fluent.label, native.label, level)
                }} title={"Learning Language"}></LanguageDropdown>
                <CustomSlider onSlidingComplete={e => {
                    setLevel(e)
                    console.log(fluent.label, native.label, level)
                }}></CustomSlider>
            <ButtonContainer>
                <CustomButton 
                title={"Create your Account"} 
                onPress={()=> HandleSignup(email, fullname, password, native.label, fluent.label , level)}
                />
                
            </ButtonContainer>
            
            </Center>
        </Cont>
    )
};

ChooseLanguage.defaultProps = {

};

export default ChooseLanguage;