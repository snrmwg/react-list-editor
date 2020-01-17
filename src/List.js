import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.ul`
list-style: none;
`;

const ListItem = styled(({selected, onSelect, onEdit, className, children}) => {
    return <li className={className} onClick={onSelect}>{children} <ActionsWrapper onEdit={onEdit} selected={selected}/></li>
})`
padding: 1rem;
background-color: white;
${({selected}) => selected && css`background-color: #eee;`}
`;

const Action = styled(({onClick, children, className}) => <button className={className} onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
}}>{children}</button>)`
border: 1px solid #ccc;
background-color: #ccc;
cursor: pointer;
padding:0.5rem;
`;

const Actions = ({onEdit, className}) => {
    return <div className={className}><Action onClick={onEdit}>edit</Action> [actions]</div>
};

const ActionsWrapper = styled(Actions)`
opacity: ${({selected}) => selected ? 1 : 0};
 ${ListItem}:hover & {
  opacity: 1;
 }
`;

export default ({items, selected, onSelect, onEdit}) =>
    <Wrapper>
        {items.map(item =>
            <ListItem key={item}
                      selected={item === selected}
                      onEdit={() => onEdit(item)}
                      onSelect={() => selected !== item ? onSelect(item) : onSelect(null)}>
                {item}
            </ListItem>)}
    </Wrapper>