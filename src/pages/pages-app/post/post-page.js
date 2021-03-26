import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import PostForm from '../../../components/post';
const Cont = styled.View``;

const PostPage = ({navigation}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [id, setId] = useState('')

    useEffect(()=> {
        AsyncStorage.getItem("user")
        .then((value)=> {
            setId(JSON.parse(value))
        });
    }, [])

    const CreatePost = async() => {
        console.log('clicked!')
        axios({
            method: "post",
            url: "http://10.0.2.2:8080/api/posts/create",
            data: {
                post_author: id.id, 
                post_title: title, 
                post_description: body
            }
        })

        .then((res) => {
            navigation.navigate('Individual-Post', {
                id: res.data.result.insertId
            })
        })
    }

    return (
        <PostForm
            onTitleChange={e=>setTitle(e)}
            onBodyChange={e=>setBody(e)}
            Submit={CreatePost}
        >
            
        </PostForm>
    )
};

PostPage.defaultProps = {

};

export default PostPage;