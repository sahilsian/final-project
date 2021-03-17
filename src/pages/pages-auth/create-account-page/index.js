import React, {useContext} from 'react';
import styled from 'styled-components/native';
import CustomButton from '../../../components/button';
import { AuthContext } from '../../../app/authprovider';
import Center from '../../../components/center';
import CustomInput from '../../../components/Input';
import ButtonFooter from '../../../components/button-footer';

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



const CreateAccount = ({navigation}) => {
    const {login} = useContext(AuthContext);
    return (
        <Cont>
            <Center>
            <FlexWrap>
                <CustomInput 
                    title={"First Name"}
                    placeholder={"First Name"}
                    half
                />
                <CustomInput 
                    title={"Last Name"}
                    placeholder={"Last Name"}
                    half
                />

            </FlexWrap>
            
            <CustomInput
                title={"Email"}
                placeholder={"name@email.com"}
            />
            <CustomInput
                title={"Password"}
                placeholder={"Password"}
                password
            />
            <ButtonContainer>
                <CustomButton 
                title={"Next"} 
                onPress={()=> {
                    navigation.navigate('ChooseLanguage')
                }}
                />
                <ButtonFooter
                    text={"Already have an Account? Login"}
                    onPress={()=> {
                        navigation.navigate('LoginCred')
                    }}
                />
            </ButtonContainer>
            
            </Center>
        </Cont>
    )
};

CreateAccount.defaultProps = {

};

export default CreateAccount;