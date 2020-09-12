import styled from 'styled-components';

export const Options = styled.div``;

export const List = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-basis: 0;
`;

export const Option = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: none;

    span {
        font-size: 30px;
    }

    p {
        margin: 2px 0 0;
        font-size: 14px;
    }
`;
