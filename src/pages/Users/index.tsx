import { useState, useContext } from 'react';
import { Button } from '../../components/Button';
import { Context } from '../../contexts/Context';
import { UserType } from '../../reducers/user';
import DelImg from '../../images/del.svg';
import * as C from './styles';

export const Users = () => {
    const { state, dispatch } = useContext(Context);

    const [list] = useState<UserType[]>(state.user);

    const handleDelUser = (id: string) => {
        dispatch({
            type: 'DEL_USER',
            payload: { id }
        });        
    }

    return (
        <C.Container>
            <C.H2>Usuários Cadastrados</C.H2>  
            <C.TableUsers>
                <C.Thead>
                    <C.TR>
                        <C.TH>Nome</C.TH>
                        <C.TH>Idade</C.TH>
                        <C.TH>Contato</C.TH>
                        <C.TH>E-mail</C.TH>
                        <C.TH>Opções</C.TH>
                    </C.TR>
                </C.Thead>
                <C.Tbody>
                    {list.map((item, index) => (
                        <C.TR key={index}>
                            <C.TD>{item.name}</C.TD>
                            <C.TD>{item.age} anos</C.TD>
                            <C.TD>{item.contact}</C.TD>
                            <C.TD>{item.email}</C.TD>
                            <C.TD>
                                <Button bgColorButton="#E16767" icon={DelImg} onClick={() => handleDelUser(item.id)} />
                            </C.TD>
                        </C.TR>
                    ))}
                </C.Tbody>            
            </C.TableUsers>
        </C.Container>
    );
}