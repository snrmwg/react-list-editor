import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.ul`
list-style: none;
& li {
padding: 1rem;
background-color: beige;
}
& li:hover {
background-color: cornsilk;
}
`;

const ListItem = styled(({ onSelect, className, children}) => {
    return <li className={className} onClick={onSelect}>{children}</li>
})`
${({selected}) => selected && css`border:1px solid red;`}
`;

export default () => {
    const [selected, setSelected] = useState('B');

    const items = ['A', 'B', 'C', 'D'];
    return <Wrapper>
        {items.map(item => <ListItem key={item} selected={item === selected} onSelect={() => setSelected(item)}>{item}</ListItem>)}
    </Wrapper>;
}