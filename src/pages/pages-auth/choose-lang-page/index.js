import React, {useContext} from 'react';
import styled from 'styled-components/native';
import CustomButton from '../../../components/button';

import Center from '../../../components/center';
import CustomInput from '../../../components/Input';
import ButtonFooter from '../../../components/button-footer';

import LanguageDropdown from '../../../components/language-dropdown';
import CustomSlider from '../../../components/slider';

const Cont = styled.View`
    flex: 1;
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

const ChooseLanguage = ({navigation}) => {
    
    return (
        <Cont>
            <Center>
                <LanguageDropdown></LanguageDropdown>
                <LanguageDropdown title={"Learning Language"}></LanguageDropdown>
                <CustomSlider></CustomSlider>
            <ButtonContainer>
                <CustomButton 
                title={"Next"} 
                onPress={()=> {
                    navigation.navigate('Completion')
                }}
                />
                
            </ButtonContainer>
            
            </Center>
        </Cont>
    )
};

ChooseLanguage.defaultProps = {

};

export default ChooseLanguage;