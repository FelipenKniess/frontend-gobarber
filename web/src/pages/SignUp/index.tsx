import React, {useState, ChangeEvent} from 'react';
import {Container, Content, Background} from './styles';
import LogoImg from '../../assets/Logo.svg';
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import Input from '../../Components/Input';
import Button from '../../Components/Button';


const SignUp:React.FC = () => {

    return (
        <Container>
            <Background />
            <Content>
                <img src={LogoImg} className="logo" alt="Gobarber"/>

                <form>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={FiUser} name="nome" type="text" placeholder="Nome" />
                    <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
                    <Button type="submit">Cadastrar</Button>
                </form>
                <a href="" className="create-account">
                    < FiArrowLeft />
                    Voltar para o login
                </a>
            </Content>
        </Container>

    )
}

export default SignUp;