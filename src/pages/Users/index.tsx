import { useContext, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/styles';
import { Context } from '../../contexts/Context';
import DelImg from '../../images/del.svg';
import EmptyImg from '../../images/empty.png';
import EditImg from '../../images/edit.svg';
import CancelImg from '../../images/cancel.svg';
import * as C from './styles';
import { UserType } from '../../reducers/user';

export const Users = () => {
    const { state, dispatch } = useContext(Context);   
    
    const [edit, setEdit] = useState<boolean>(false);
    const [getId, setGetId] = useState<string>('');
    const [nameInput, setNameInput] = useState<string>('');
    const [ageInput, setAgeInput] = useState<number>(0);
    const [contactInput, setContactInput] = useState<number>(0);

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput( e.target.value );
    }

    const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput( parseInt(e.target.value) );
    }

    const handleContactInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactInput( parseInt(e.target.value) );
    }

    const handleDelUser = (id: string) => {
        dispatch({
            type: 'DEL_USER',
            payload: { id }
        });        
    }   
    
    const handleEditUser = (item: UserType) => {                   
        setEdit(true);               

        setNameInput(item.name);
        setAgeInput(item.age);
        setContactInput(item.contact); 
        setGetId(item.id);
    }

    const handleSalve = () => {                                
        dispatch({
            type: 'EDIT_USER',
            payload: { 
                id: getId,                   
                name: nameInput,
                age: ageInput,
                contact: contactInput
            }            
        });
    
        setEdit(false);
    }

    const handleCancel = () => setEdit(false);

    return (
        <C.Container>
            <C.H2>Usuários Cadastrados</C.H2>             
            {state.user[0] &&            
                <C.TableUsers>
                    <C.Thead>
                        <C.TR>
                            <C.TDIV themeOptions={state.theme}>
                                <C.TH>Nome</C.TH>
                            </C.TDIV>                            
                            <C.TDIV themeOptions={state.theme}>
                                <C.TH>Idade</C.TH>
                            </C.TDIV>
                            <C.TDIV themeOptions={state.theme}>
                                <C.TH>Contato</C.TH>
                            </C.TDIV>                            
                            <C.TDIV themeOptions={state.theme}>
                                <C.TH>Opções</C.TH>
                            </C.TDIV>
                        </C.TR>
                    </C.Thead>
                    <C.Tbody>
                        {state.user.map((item, index) => (
                            <C.TR key={index}>
                                <C.TDIV themeOptions={state.theme}>
                                    <C.TD>{item.name}</C.TD>
                                </C.TDIV>
                                <C.TDIV themeOptions={state.theme}>
                                    <C.TD>{item.age} anos</C.TD>
                                </C.TDIV>
                                <C.TDIV themeOptions={state.theme}>
                                    <C.TD>{item.contact}</C.TD>
                                </C.TDIV>                                
                                <C.TDIV themeOptions={state.theme}>
                                    <C.TD>
                                        <Button bgColorButton="#E16767" icon={DelImg} onClick={() => handleDelUser(item.id)} />
                                        <Button bgColorButton="#2E9AFE" icon={EditImg} onClick={() => handleEditUser(item)} />
                                    </C.TD>
                                </C.TDIV>                                    
                            </C.TR>                            
                        ))}                        
                    </C.Tbody>            
                </C.TableUsers>
            }
            {edit &&
                <C.Edit themeOptions={state.theme}>
                    <C.EditTitle>Editar Cadastro</C.EditTitle>
                    <Input type="text" placeholder="Seu nome" value={nameInput} onChange={handleNameInput} />
                    <Input type="number" placeholder="Sua idade" value={ageInput} onChange={handleAgeInput} />
                    <Input type="number" placeholder="Seu contato" value={contactInput} onChange={handleContactInput} />
                    <C.EditDiv>
                        <Button content="Salvar" bgColorButton="#2E9AFE" icon={EditImg} onClick={handleSalve} />
                        <Button content="Cancelar" bgColorButton="#2E9AFE" icon={CancelImg} onClick={handleCancel} />
                    </C.EditDiv>                                            
                </C.Edit>
            }
            {!state.user[0] &&
                <C.Empty>
                    <C.EmptyText>Ops, sem registros no momento!</C.EmptyText>
                    <C.EmptyImg src={EmptyImg} alt="" />
                </C.Empty>
            }            
        </C.Container>
    );
}