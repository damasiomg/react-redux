import React, {useState, FormEvent } from 'react';
import  api from '../../services/api';
import { Form, BoxInput } from './styles';
import { FormUser } from '../../types';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setUser } from '../../store/Users/Users.actions';


const QuickRegistration: React.FC = () => {
    
    const dispatch = useDispatch();
    const users = useSelector<RootState>(store => store.users);

    const INITIAL_STATE = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };

    const [formUser, setFormUser] = useState<FormUser>(INITIAL_STATE);

    async function handleAddUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return (
        <>
            <Form onSubmit={handleAddUser}>
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

                <BoxInput>
                    <button type="submit">Enviar</button>
                </BoxInput>
            </Form>
        </>
    )
}

export default QuickRegistration;