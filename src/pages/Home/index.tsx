import React, { useState, useEffect } from 'react';
import TableList from '../../components/TableList';
import FloatingButton from '../../components/FloatingButton';
import { User } from '../../types';


import api from '../../services/api';

const Home: React.FC = () => {
    const [list, setList] = useState<User[]>([]);

    useEffect(() => {
        api.get('/users/?limit=5').then(response => {
            if(response && response.data){
                setList(response.data);
            }
        })


    }, []);

    return (
        <>
            <TableList list={list} />
            <FloatingButton route='dasdasda'/>            
        </>
    )
}

export default Home;