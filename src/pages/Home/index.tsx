import React from 'react';
import TableList from '../../components/TableList';
import FloatingButton from '../../components/FloatingButton';


import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';

import { setUser } from '../../store/Users/Users.actions';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const users = useSelector<RootState>(store => store.users);

    const list = [{id: 1, name: 'John Doe', email: 'john@gmail.com'}];

    return (
        <>
            <TableList list={list} />
            <FloatingButton route='dasdasda'/>            
            <button onClick={() => dispatch(setUser({id: 1, name: 'John Doe', email: 'john@gmail.com'}))} >setUser</button>
        </>
    )
}

export default Home;