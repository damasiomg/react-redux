import React, {useState, useEffect, FormEvent } from 'react';
import  api from '../../services/api';
import { Form, BoxInput } from './styles';
import { FormUser } from '../../types';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLoadingState, setUser} from '../../store/Users/Users.actions';

const QuickRegistration: React.FC = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector((store: RootState) => store.users.currentUser);

    let INITIAL_STATE = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };

    const [formUser, setFormUser] = useState<FormUser>(INITIAL_STATE);

    useEffect(() => {
        if(currentUser.id){
            setFormUser(currentUser);
        }
    },[]);

    async function handleAddUser(e: FormEvent<HTMLFormElement>){
        dispatch(setLoadingState(true));
        e.preventDefault();

        api.post('/users', normalizeData(formUser)).then(response => {
            dispatch(setUser(null));
            window.location.href = '/';
        }).finally(() => {
            dispatch(setLoadingState(false));
        });
    }

    async function handleUpdateUser(e: FormEvent<HTMLFormElement>){
        dispatch(setLoadingState(true));
        e.preventDefault();
        api.put(`/users/${currentUser.id}`, normalizeData(formUser)).then(response => {
            dispatch(setUser(null));
            window.location.href = '/';
        }).finally(() => {
            dispatch(setLoadingState(false));
        });
    }

    const normalizeData = (dataOfForm: FormUser): string => {
        return JSON.stringify({
            email: dataOfForm.email,
            password: dataOfForm.password,
            name:{
                firstname: dataOfForm.firstname,
                lastname:dataOfForm.lastname
            }
        })
    }

    function returnList(){
        window.location.href='/';
    }

    return (
        <>  
            <div>{!!currentUser.id ? 'Atualiza????o' : 'Cadastro'} de usu??rio</div>
            <Form onSubmit={!!currentUser?.id ? handleUpdateUser : handleAddUser}>
                <BoxInput>
                    <input
                        autoComplete="none"
                        value={formUser.firstname}
                        onChange={(e) => setFormUser({ ...formUser, firstname: e.target.value })}
                        placeholder="Nome"
                    />
                </BoxInput>

                <BoxInput>
                    <input
                        autoComplete="none"
                        value={formUser.lastname}
                        onChange={(e) => setFormUser({ ...formUser, lastname: e.target.value })}
                        placeholder="Sobrenome"
                    />
                </BoxInput>

                <BoxInput>
                    <input
                        autoComplete="none"
                        type="email"
                        value={formUser.email}
                        onChange={(e) => setFormUser({ ...formUser, email: e.target.value })}
                        placeholder="E-email"
                    />
                </BoxInput>

                <BoxInput>
                    <input
                        autoComplete="none"
                        type="password"
                        value={formUser.password}
                        onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
                        placeholder="Senha"
                    />
                </BoxInput>

                <BoxInput className='green-type'>
                    <button type="submit">Enviar</button>
                </BoxInput>

                <BoxInput >
                    <button type='button' onClick={returnList}>Cancelar</button>
                </BoxInput>
            </Form>
        </>
    )
}

export default QuickRegistration;