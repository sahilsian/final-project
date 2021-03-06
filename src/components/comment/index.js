import React from 'react'
import styled from 'styled-components'
import Avatar from '../avatar';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const CommentView = styled.View`
    alignItems: flex-start;
    margin-left: 10px;
`;

const CommentTextAuthor = styled.Text`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
`;

const CommentText = styled.Text`
    font-size: 12px;
    color: #fff;
`;

const AvatarCont = styled.View`
    width: 22px;
    height: 22px;
`;


const CommentPost = ({name, comment, img}) => {

    return (
        <Container>
            <AvatarCont>
                    <Avatar
                        img_link={img}
                        size={"100%"}
                    />
            </AvatarCont>
            <CommentView>
                    <CommentTextAuthor>{name}</CommentTextAuthor>
                    <CommentText>{comment}</CommentText>
            </CommentView>

        </Container>
        
    )
}

CommentPost.defaultProps = {
    comment : "I like this word as well!",
    name: "John Smith"
}

export default CommentPost