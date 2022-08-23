import { useContext } from 'react';
import { Button } from '../../components/Button';
import { Context } from '../../contexts/Context';
import DelImg from '../../images/del.svg';
import EmptyImg from '../../images/empty.png';
import * as C from './styles';

export const Users = () => {
    const { state, dispatch } = useContext(Context);        

    const handleDelUser = (id: string) => {
        dispatch({
            type: 'DEL_USER',
            payload: { id }
        });        
    }    

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
                                <C.TH>E-mail</C.TH>
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
                                    <C.TD>{item.email}</C.TD>
                                </C.TDIV>
                                <C.TDIV themeOptions={state.theme}>
                                    <C.TD>
                                        <Button bgColorButton="#E16767" icon={DelImg} onClick={() => handleDelUser(item.id)} />
                                    </C.TD>
                                </C.TDIV>
                            </C.TR>
                        ))}
                    </C.Tbody>            
                </C.TableUsers>
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