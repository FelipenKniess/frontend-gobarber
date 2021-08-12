import React, {useRef, useCallback} from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {Container, Content, Background, AnimationContainer} from './styles';
import LogoImg from '../../assets/Logo.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn:React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const { user, signIn } = useAuth()
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                .email('Digite um e-mail válido')
                .required('E-mail obrigatório'),
                password: Yup.string().required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await signIn({
                email: data.email,
                password: data.password
            })
        } catch (err) {
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro na autentificação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
            });
        }
      }, [signIn, addToast]);

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={LogoImg} className="logo" alt="Gobarber"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
                        <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
                        <Button className="button-login" type="submit">Entrar</Button>
                        <a href="">Esqueci minha senha</a>
                    </Form>
                    <Link to="/signup" className="create-account">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>

    )
}

export default SignIn;