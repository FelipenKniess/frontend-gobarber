import React, {useState, ChangeEvent} from 'react';
import {Container, Content, Background} from './styles';
import LogoImg from '../../assets/Logo.svg';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import Input from '../../Components/Input';
import Button from '../../Components/Button';


const SignIn:React.FC = () => {

    return (

        <Container>
            <Content>
                <img src={LogoImg} className="logo" alt="Gobarber"/>

                <form>
                    <h1>Faça seu login</h1>

                    <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
                    <Button className="button-login" type="submit">Entrar</Button>
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