import React from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import languages from '../../../assets/languages.json'

const Cont = styled.View`
    width: 100%;
    height: 220px;
    padding: 15px 0px;
`;

const TextComp = styled.Text`
    color: #2E2727;
    padding: 10px 0px;
`

const LanguageDropdown = ({title, onChange,z}) => {
    return (
        <Cont>
            <TextComp>{title}</TextComp>
            <DropDownPicker
                zIndex={z}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                placeholderStyle={{color: "#bfc2c7"}}
                items={languages}
                placeholder={"Choose a Language"}
                containerStyle={{width: '100%', height: 40}}
                onChangeItem={onChange}
            >

            </DropDownPicker>

        </Cont>
        
    )
};

LanguageDropdown.defaultProps = {
    title: "Native Language"
};

export default LanguageDropdown;