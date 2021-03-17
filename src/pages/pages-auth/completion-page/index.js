import React, {useContext} from 'react';
import styled from 'styled-components/native';
import CustomButton from '../../../components/button';
import Center from '../../../components/center';
import { AuthContext } from '../../../app/authprovider';

const Cont = styled.View`
    flex: 1;
`;

const ButtonContainer = styled.View`
    width: 100%;
    padding-top: 80px;
`;


const Completion = () => {
    const {login} = useContext(AuthContext);
    return (
        <Cont>
            <Center>
                <ButtonContainer>
                    <CustomButton 
                    title={"Get Started"} 
                    onPress={()=> {
                        Login()
                    }}
                    />
                    
                </ButtonContainer>
            </Center>
        </Cont>
    )
};

Completion.defaultProps = {

};

export default Completion;