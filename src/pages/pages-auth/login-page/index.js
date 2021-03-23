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


const LoginCredentials = ({navigation}) => {
    const {login} = useContext(AuthContext);
    return (
        <Cont>
            <Center>
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
                title={"Login"} 
                onPress={()=> {
                    login()
                }}
                />
                <ButtonFooter 
                    onPress={()=> {
                        navigation.navigate('Register')
                    }}
                />
            </ButtonContainer>
            
            </Center>
        </Cont>
    )
};

LoginCredentials.defaultProps = {

};

export default LoginCredentials;