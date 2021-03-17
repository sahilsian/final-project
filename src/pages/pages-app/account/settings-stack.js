import React from 'react';
import styled from 'styled-components/native';
import Center from '../../../components/center';
import { Text, View} from 'react-native';
import Avatar from '../../../components/avatar';
import CustomButton from '../../../components/button';
import CustomInput from '../../../components/Input';
import { StyleSheet } from 'react-native';

const FlexBox = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;
    marginTop: 15px;
    alignItems: center;

`;

const ButtonCont = styled.View`
width: 60%;
`;

const AccountSettings = () => {
    return (
        <Center>
        <FlexBox>
            <Avatar size={90}></Avatar>
            <ButtonCont>
                <CustomButton title="Upload a Photo" ></CustomButton>
            </ButtonCont>
        </FlexBox>
        <FlexBox>
            <CustomInput title={"First Name"} placeholder={"First Name"} half={true}></CustomInput>
            <CustomInput title={"Last Name"} placeholder={"Last Name"} half={true}></CustomInput>
        </FlexBox>
        <CustomInput title={"Email"} placeholder={"Email"}></CustomInput>
        <CustomInput title={"Password"} placeholder={"Password"} display={true} password={true}></CustomInput>
        <Text style={styles.text}>6 - 20 Characters (A - Z, a - z, 0 - 9)</Text>
        <CustomButton title="Save Changes" ></CustomButton>
    </Center>
    )
};

var styles = StyleSheet.create({
    text: {
        color: "gray",
        marginBottom: 40,
        marginRight: 135,
        marginTop: 8
    }
});

AccountSettings.defaultProps = {

};

export default AccountSettings;