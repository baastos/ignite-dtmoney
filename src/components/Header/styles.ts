import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    button{
        font-size: 1rem;
        background: var(--blue-light);
        padding: 0 2rem;
        border: 0;
        height: 3rem;
        transition: filter 0.2s;
        border-radius: 0.25rem;
        color: #FFF;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;