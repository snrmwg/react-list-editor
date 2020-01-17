import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
position: absolute;
top:0;
left: 0;
right:0;
bottom: 0;
z-index: 100;
transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
background-color: rgba(102,102,102,0.5);
 opacity: 1;
`;
const Container = styled.div`
position: fixed;
top:0;
left: 0;
right:0;
bottom: 0;
z-index: 0;
`;

const ContentWrapper = styled.div`
transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
 opacity: 1;
 position: absolute;
 top:0;
 right:0;
 max-width: 100%;
 width:500px;
 z-index: 200;
 height:calc(100% - 20px);
 overflow: hidden;
 border-radius:8px;
 box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08);
 margin: 10px 10px 10px 0;
 
 @media (max-width: 750px) {
 width:100%;
 border-radius:0;
 margin: 10px 0;
 }
`;

export default ({children}) => <Container>
    <Overlay/>
    <ContentWrapper>
        {children}
    </ContentWrapper>
</Container>