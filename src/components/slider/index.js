import React from 'react';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';


const Cont = styled.View`
    width: 100%;
`;

const TextWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const TextComp = styled.Text`
    color: #9F7AFE;
    font-size: 12px;
`;

const CustomSlider = ({onSlidingComplete}) => {
    return (
        <Cont>
            <Slider
                    style={{width: "100%", height: 40}}
                    minimumValue={1}
                    maximumValue={3}
                    minimumTrackTintColor="#A47AFE"
                    maximumTrackTintColor="#9F7AFE"
                    thumbTintColor="#A47AFE"
                    step={1}
                    onSlidingComplete={onSlidingComplete}
            />
            <TextWrapper>
                <TextComp>Beginner</TextComp>
                <TextComp>Intermediate</TextComp>
                <TextComp>Advanced</TextComp>
            </TextWrapper>
        </Cont>
    )
};

CustomSlider.defaultProps = {

};

export default CustomSlider;