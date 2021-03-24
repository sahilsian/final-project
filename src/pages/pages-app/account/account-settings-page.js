import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Avatar from '../../../components/avatar';
import { Header } from 'react-native-elements';
import CustomInput from '../../../components/Input';
import LanguageDropdown from '../../../components/language-dropdown';
import CustomButton from '../../../components/button';

const Container = styled.View`
`;

const AvatarBox = styled.View`
    padding: 25px 15px;
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-width: 1;
`;

const RegularBox = styled.View`
    padding: 25px 15px;
    border-bottom-color: #dbdbdb;
    border-bottom-width: 1;
`;

const EditProfile = styled.Text`
    color: #613EEA;
`

const EditTouch = styled.TouchableOpacity`
    margin: 7px 0px;
`;

const AccountSettings = ({navigation}) => {

  

    return (
        <Container>
            <Header
                rightComponent={{ icon: 'menu', color: '#613EEA', onPress: ()=> {navigation.toggleDrawer();} }}
                leftComponent={{ text: 'Settings', style: { color: '#613EEA', fontWeight: '700', fontSize: 18, paddingLeft: 4 } }}
                containerStyle={{
                    backgroundColor: '#ffffff',
                    height: 80
                  }}
            />
            <AvatarBox>
                <Avatar></Avatar>
                <EditTouch>
                    <EditProfile >Edit Avatar</EditProfile>
                </EditTouch>
            </AvatarBox>
            <RegularBox>
                <LanguageDropdown title={"Change Learning Language"}>

                </LanguageDropdown>
                <CustomInput multiline={true} title={"Set Bio"} numberOfLines={3} placeholder={"Type something about you"}></CustomInput>
               
                
            </RegularBox>
            <RegularBox>
            <CustomButton title={"Save"}></CustomButton>

            </RegularBox>
        </Container>
    )
}

export default AccountSettings