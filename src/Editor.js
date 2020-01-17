import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: white;
height: 100%;
`;

export default ({item, onClose}) => {
    return <Wrapper>
        [editor {item}] <button title="schließen" onClick={onClose} >[x]</button>
    </Wrapper>
}