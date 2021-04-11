import React, {useState, ChangeEvent} from 'react';
import {Container, Content, Background} from './styles';
import LogoImg from '../../assets/Logo.svg';
import { FiLogIn } from 'react-icons/fi';

const SignIn:React.FC = () => {

    return (

        <Container>
            <Content>
                <img src={LogoImg} className="logo" alt="Gobarber"/>

                <form>
                    <h1>Faça seu login</h1>

                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                    <a href="">Esqueci minha senha</a>
                </form>
                <a href="" className="create-account">
                    < FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>

    )
}

export default SignIn;