import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import CustomButton from '../button';
import Avatar from '../avatar';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
`;


const FollowersCont = styled.View`

`;

const FollowersText = styled.Text`

`;

const FollowrersNum = styled.Text`
marginTop: 5px;
`;

const FollowingText = styled.Text`

`;

const FollowingCont = styled.View`
    marginLeft: 50px;
`;

const FollowingNum = styled.Text`
marginTop: 5px;
`;

const BottomCont = styled.View`
padding-left: 20px;
padding-right: 20px;
`;

const SmallBox = styled.View`
flexDirection: row;

`;

const Name = styled.Text`


`;

const Id = styled.Text`
marginLeft: 10px;

`;

const Bio = styled.Text`
    marginTop: 10px;
`;

const LgLevel = styled.View`
    flexDirection: row;
`;

const NativeLg = styled.Text`
    marginTop: 15px;
`;

const LearningLg = styled.Text`
    marginTop: 15px;
`;

const NativeStars = styled.Text`
    marginLeft: 20px;
    marginTop: 15px;
`;

const TopBox = styled.View`
flexDirection: row;
marginBottom: 30px;
`;



const Profile = ({follower, following, id, username, bio, nativelg, learninglg}) => {
    return (
        <ProfileCont>
            <TopCont>
                <Avatar></Avatar>
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
                    <CustomButton title="Follow" />
                </FollowBox>
            </TopCont>
            <BottomCont>
                <SmallBox>
                    <Name>{username}</Name>
                    <Id>ID: {id}</Id>
                </SmallBox>
                <Bio>{bio}</Bio>
                <LgLevel>
                    <NativeLg>{nativelg}</NativeLg>
                    <NativeStars>
                    <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                    <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                    <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                    <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                    <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                    </NativeStars>
                </LgLevel>
                <LgLevel>
                    <LearningLg>{learninglg}</LearningLg>
                    <NativeStars>
                        <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                        <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                        <Ionicons name="star" style={styles.star} size="large"></Ionicons>
                    </NativeStars>
                </LgLevel>
            </BottomCont>
        </ProfileCont>
        
        
    )
}

var styles = StyleSheet.create({
    star: {        
        color: "#A17AFE",
        fontSize: 16,
      },


});

Profile.defaultProps = {
following: "29",
follower: "35",
id: "12345",
username: "Mary Williams",
bio: "Hi! Let’s learn English together:) My name is Marry and I love to learn different cultures and languages.",
nativelg: "Japanese",
learninglg: "English"

}

export default Profile