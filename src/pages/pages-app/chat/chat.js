import React, { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Center from '../../../components/center';
import { GiftedChat } from 'react-native-gifted-chat'

const UserChat = ({route}) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hi I am a person!',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://i.stack.imgur.com/34AD2.jpg',
            },
          },
        ])
    }, [])
      
    const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
        
    )
};

export default UserChat;