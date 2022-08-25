import React, { useState, useEffect } from 'react';
import TableList from '../../components/TableList';
import { User } from '../../types';


import api from '../../services/api';
import LoadingPage from '../../components/LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLoadingState } from '../../store/Users/Users.actions';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.users);

    const [list, setList] = useState<User[]>([]);

    useEffect(() => {
        dispatch(setLoadingState(true));
        api.get('/users/?limit=5').then(response => {
            if(response && response.data){
                setList(response.data);
                dispatch(setLoadingState(false));
            }
        })


    }, []);

    return (
        <>  
            {!!user.isLoading ? <LoadingPage/> : <TableList list={list} />}
        </>
    )
}

export default Home;