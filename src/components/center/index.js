import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const Center = ({ children }) => {
    return (
        <Cont>{children}</Cont>
    )
};

Center.defaultProps = {

};

export default Center;