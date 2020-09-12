import styled, { css } from 'styled-components';

export const Stats = styled.div`
    margin-top: 10px;
`;

const statsList = css`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 10px 0 0;
    list-style: none;
`;

export const ConcreteStats = styled.ul`
    ${statsList};

    text-align: center;
    border-top: 1px solid var(--color-big-stone-pale);

    li {
        flex-grow: 1;
        flex-basis: 0;
    }
`;

export const SummaryStats = styled.ul`
    ${statsList};

    margin-top: 10px;
    justify-content: space-around;
    border-top: 1px dashed var(--color-big-stone-pale);
`;
