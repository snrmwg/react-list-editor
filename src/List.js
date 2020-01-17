import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.ul`
list-style: none;
`;

const ListItem = styled(({selected, onSelect, className, children}) => {
    return <li className={className} onClick={onSelect}>{children} <ActionsWrapper selected={selected}/></li>
})`
padding: 1rem;
background-color: white;
${({selected}) => selected && css`background-color: #eee;`}
`;

const Actions = ({selected, className}) => {
    return <div className={className}>[actions]</div>
};

const ActionsWrapper = styled(Actions)`
opacity: ${({selected}) => selected ? 1 : 0};
 ${ListItem}:hover & {
  opacity: 1;
 }
`;

export default () => {
    const [selected, setSelected] = useState('B');

    const items = ['A', 'B', 'C', 'D'];
    return <Wrapper>
        {items.map(item =>
            <ListItem key={item}
                      selected={item === selected}
                      onSelect={() => selected !== item ? setSelected(item) : setSelected(null)}>
                {item}
            </ListItem>)}
    </Wrapper>;
}