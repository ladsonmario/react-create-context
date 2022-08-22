import React, { useState, useContext } from 'react';
import { Button } from '../../components/Button';
import { Context } from '../../contexts/Context';
import OkImg from '../../images/ok.svg';
import * as C from './styles';

export const Home = () => {
    const { dispatch } = useContext(Context);

    const [nameInput, setNameInput] = useState<string>('');
    const [ageInput, setAgeInput] = useState<number>(0);
    const [contactInput, setContactInput] = useState<number>(0);
    const [emailInput, setEmailInput] = useState<string>('');

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput( e.target.value );
    }

    const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput( parseInt(e.target.value) );
    }

    const handleContactInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactInput( parseInt(e.target.value) );
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput( e.target.value );
    }

    const handleAddUser = () => {
        if(nameInput && ageInput && contactInput && emailInput) {
            dispatch({
                type: 'ADD_USER',
                payload: {
                    name: nameInput,
                    age: ageInput,
                    contact: contactInput,
                    email: emailInput
                }
            });
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <C.Container>
            <C.H2>Formulário de Cadastro</C.H2>
            <C.Form>
                <C.Input type="text" placeholder="Seu nome" value={nameInput === '' ? '' : nameInput} onChange={handleNameInput} />
                <C.Input type="number" placeholder="Sua idade" value={ageInput === 0 ? '' : ageInput} onChange={handleAgeInput} />
                <C.Input type="number" placeholder="Seu contato" value={contactInput === 0 ? '' : contactInput} onChange={handleContactInput} />                
                <C.Input type="email" placeholder="Seu e-mail" value={emailInput === '' ? '' : emailInput} onChange={handleEmailInput} /> 
                <Button content="Cadastrar" bgColorButton="#3282B8" icon={OkImg} onClick={handleAddUser} />
            </C.Form>
        </C.Container>
    );
}