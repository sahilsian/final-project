import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import CustomButton from '../../components/button';
import Center from '../../components/center';
import CommentPost from '../../components/comment';
import CustomInput from '../../components/Input';
import LanguagePost from '../../components/languagePost';
const Cont = styled.View``;

const CommentCont = styled.View`
    margin: 15px 15px;
`;

const SendCont = styled.View`
    flex-direction: row;
`;

const IndividualPost = ({route}) => {
    const id = route.params.id
    const [data, setData] = useState('')
    const [dataa, setDataa] = useState('')
    const [commentdata, setCommentData] = useState('')
    const [comment, SetComment] = useState('')

    const Comment = async(dataid) => {
        axios({
            method: 'post',
            url: `http://10.0.2.2:8080/api/comments/create`,
            data: {
                post_id: id,
                content: comment,
                comment_author_id: dataid,
                

            }
        })

        .then(e => {
            console.log('working', e)
        })
        
        .catch(e => {
            console.log('error', e)
        });
    }

    useEffect(()=> {
        AsyncStorage.getItem("user")
        .then((value)=> {
            setDataa(JSON.parse(value))
        });
        console.log(id)
        //post
        axios({
            method: 'get',
            url: `http://10.0.2.2:8080/api/posts/${id}`
        })

        .then(e => {
            setData(e.data.result[0])
        })
        
        .catch(e => {
            console.log('error', e)
        });
        //comment
        axios({
            method: 'get',
            url: `http://10.0.2.2:8080/api/comments/${id}`
        })

        .then(e => {
            setCommentData(e.data.result)
            console.log("hello", commentdata)
        })
        
        .catch(e => {
            console.log('error', e)
        });
        
    }, [])

    return (
        <Cont>
            <LanguagePost
                word={data.post_title}
                description={data.post_description}
                name={data.fullname}
                img={data.avatar}
                display
            >
            </LanguagePost>
            <CommentCont>

                <FlatList
                    style={{ 
                        width: "100%",
                        backgroundColor: "none",
                        height: 270
                    }}
                    renderItem={ ({ item }) => {
                        return (
                            <CommentPost
                                name={item.fullname}
                                comment={item.content}
                                img={item.avatar}
                            >

                            </CommentPost>
                        )
                    }}
                    data={commentdata}
                >

                </FlatList>

                
            </CommentCont>
            <CommentCont>
                <SendCont>
                    <CustomInput onButtonPress={()=>Comment(dataa.id)} buttondisplay onChange={(e)=>SetComment(e)} titledisplay placeholder={"Comment"}>

                    </CustomInput>
                </SendCont>
                
            </CommentCont>
            
        </Cont>
    )
};

IndividualPost.defaultProps = {

};

export default IndividualPost;