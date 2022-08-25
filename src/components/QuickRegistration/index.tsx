import React, {useState, useEffect, FormEvent } from 'react';
import  api from '../../services/api';
import { Form, BoxInput } from './styles';
import { FormUser, User } from '../../types';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setUser } from '../../store/Users/Users.actions';


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
        e.preventDefault();

        api.post('/users', normalizeData(formUser)).then(response => {
            window.location.href = '/';
        }).finally(() => {
            dispatch(setUser(null));
        });
    }

    async function handleUpdateUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        api.put(`/users/${currentUser.id}`, normalizeData(formUser)).then(response => {
            window.location.href = '/';
        }).finally(() => {
            dispatch(setUser(null));
        });
    }


    const normalizeData = (dataOfForm: FormUser): User => {
        return {
            email: dataOfForm.email,
            password: dataOfForm.password,
            name:{
                firstname: dataOfForm.firstname,
                lastname:dataOfForm.lastname
            }
        }
    }

    function returnList(){
        window.location.href='/';
    }

    return (
        <>
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