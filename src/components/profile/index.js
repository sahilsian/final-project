import React from 'react';
import styled from 'styled-components/native';
import CustomButton from '../button';
import Avatar from '../avatar';
import {View, Text} from 'react-native';

const ProfileCont = styled.View`
    align-items: center;
    width: 100%;
    height: 330px;
    background: rgba(164, 122, 254, 0.17);
`;

const TopCont = styled.View`
    width: 100%;
    height: 165px;
    padding: 20px;
    flexDirection: row;
`;

const FollowBox = styled.View`
    marginLeft: 30px;
    justify-content: center;
`;


const FollowersCont = styled.View`
    
`;

const FollowersText = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

const FollowrersNum = styled.Text`
    marginTop: 5px;
    font-weight: bold;
    font-size: 16px;
`;

const FollowingText = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

const FollowingCont = styled.View`
    marginLeft: 50px;
`;

const FollowingNum = styled.Text`
    marginTop: 5px;
    font-weight: bold;
    font-size: 16px;
`;

const BottomCont = styled.View`
padding-left: 20px;
padding-right: 20px;
width: 100%;
`;

const SmallBox = styled.View`
    flexDirection: row;
    align-items: center;

`;

const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const Id = styled.Text`
marginLeft: 10px;
    font-size: 12px;
`;

const Bio = styled.Text`
    marginTop: 10px;
`;



const TopBox = styled.View`
    flexDirection: row;
`;



const Profile = ({children, img, follower, following, id, username, bio, nativelg, learninglg, display}) => {
    return (
        <ProfileCont>
            <TopCont>
                <Avatar img_link={img}></Avatar>
                <FollowBox>
                    <TopBox>
                        <FollowersCont>
                            <FollowersText>Followers</FollowersText>
                            <FollowrersNum>{follower}</FollowrersNum>
                        </FollowersCont>
                        <FollowingCont>
                            <FollowingText>Following</FollowingText>
                            <FollowingNum>{following}</FollowingNum>
                        </FollowingCont>
                    </TopBox>
                    <CustomButton display={display} title="Follow" />
                </FollowBox>
            </TopCont>
            <BottomCont>
                <SmallBox>
                    <Name>{username}</Name>
                    <Id>ID: {id}</Id>
                </SmallBox>
                <Bio>{bio}</Bio>
                {children}
            </BottomCont>
        </ProfileCont>
        
        
    )
}


Profile.defaultProps = {
    following: "29",
    follower: "35",
    id: "12345",
    username: "Mary Williams",
    bio: "Hi! Let’s learn English together:) My name is Marry and I love to learn different cultures and languages.",

}

export default Profile