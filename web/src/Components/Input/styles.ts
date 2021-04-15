import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    background: #232129;
    border-radius: 10px;
    width: 100%;
    padding: 16px;


    & + div {
        margin-top: 8px;
    }

    svg {
        color: #666360;
        margin-right: 16px;
    }

    input {
        flex: 1;
        background: transparent;
        color: #fff;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }
`