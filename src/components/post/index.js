import React from 'react'
import styled from 'styled-components'
import CustomButton from '../button';
import Center from '../center';
import CustomInput from '../Input';

const Wrapper = styled.View`
    flex: 1;
    background-color: #9279FE;
    width: 100%
    margin: 15px 0px;
    border-radius: 15px;
    padding: 15px;
`;

const WrapperTwo = styled.View`
    width: 100%;
`;

const PostForm = ({onTitleChange, onBodyChange, Submit}) => {
    return (
        <Center>
            <Wrapper>
                <CustomInput onChange={onTitleChange} maxlength={80} multiline placeholder={"Write a Title"} color={"#fff"} colorplace={"#B7B1D9"} background={"#8760E8"} title={"Write a Title"} titlecolor={"#fff"} fontweight></CustomInput>
                <CustomInput onChange={onBodyChange} numberOfLines={8}  maxlength={254} multiline placeholder={"Write a Description"} color={"#fff"} colorplace={"#B7B1D9"} background={"#8760E8"} title={"Write a Description"} titlecolor={"#fff"} fontweight></CustomInput>
            </Wrapper>
            <WrapperTwo>
            <CustomButton onPress={Submit} title={"Create"}></CustomButton>
    
            </WrapperTwo>

        </Center>
    )
}

export default PostForm