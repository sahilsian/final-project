import React, {useContext} from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import CustomButton from '../../../components/button';
import Center from '../../../components/center';
import CustomSecondaryButton from '../../../components/secondary-button';
//import LottieView from 'lottie-react-native';

const Cont = styled.View`
    flex: 1;
`;

const Logo = styled.Image`
    width: 150px;
    height: 150px;
    margin: 20px;
`;

const Subtitle = styled.Text`
    color: #3B414B;
    font-weight: bold;
    text-align: center;
    line-height: 24px;

`;

const ButtonContainer = styled.View`
    width: 100%;
    padding-top: 80px;
`;

const StartPage = ({navigation}) => {
    return (
        <Cont>
            <Center>
                {/* <LottieView 
                source={require('../../../../assets/animation.json')} 
                autoPlay 
                loop
                imageAssetsFolder={'assets'}
                /> */}
                <Logo 
                source={require('../../../../assets/logo.png')}
                style={{
                    resizeMode: 'contain'
                }}
                />
                <Subtitle>Learn New Languages {"\n"} Make New Friends</Subtitle>
                <ButtonContainer>
                    <CustomButton title={"Login"} onPress={()=> {
                        navigation.navigate('LoginCred')
                    }}>
                    </CustomButton>
                    <CustomSecondaryButton 
                    title={"Create an Account"}
                    onPress={()=> {
                        navigation.navigate('Register')
                    }}
                    />
                    {/* <Button 
                    title={"test"}
                    onPress={()=> {
                        navigation.navigate('Test')
                    }}
                    ></Button> */}
                </ButtonContainer>
            </Center>
        </Cont>
    )
};

StartPage.defaultProps = {

};

export default StartPage;