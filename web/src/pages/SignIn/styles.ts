import styled from 'styled-components';
import signInBackgroundImg from '../../assets/background-signin.png'
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    height: 100vh; //adiciona 100% da tela para o usuário
    align-items: stretch;

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 850px;

    .logo {
        margin-top: 128px;
        width: 230px;
        height: 134px;

    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        width: 340px;

        h1 {
            font-size: 24px;
            color: #F4EDE8;
            text-align:center;
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            width: 100%;
            padding: 16px;
            color: #fff;

            & + input {
                margin-top: 8px;
            }
        }

        button {
            background: #ff9000;
            height: 56px;
            width: 100%;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            font-weight: 500;
            margin-top: 24px;
            transition: background 0.2s;

            &:hover {
                background: ${ shade(0.2, '#ff9000')};
            }
        }

        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            text-align: center;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }


    }

    .create-account {
        color: #ff9000;
        display: flex;
        align-items: center;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        text-align: center;
        transition: color 0.2s;

        &:hover {
            color: ${ shade(0.2, '#ff9000')};
        }

        svg {
            margin-right: 16px;
        }
    }

`

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;

`