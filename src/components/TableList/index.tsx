import React, { useCallback } from 'react';
import { TableItem } from './styles';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { User } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setUser } from '../../store/Users/Users.actions';
import  api from '../../services/api';

interface TableListProps {
    list: User[]
}


const TableList: React.FC<TableListProps> = ({list}) => {

    const dispatch = useDispatch();
    const users = useSelector<RootState>(store => store.users);

    const handleEditUser = (userItem: User): void => {
        dispatch(setUser(userItem));
    }

    async function handleDeleteUser(id: number | undefined){
        api.delete(`/users/${id}`).then(response => {
        }).finally(() => {
            dispatch(setUser(null));
            window.location.href = '/';
        });
    }
    
    return (
        <>
            <TableItem>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(userItem => {
                        return(
                            <tr key={userItem.id}>
                                <td className='ceil-name'>{`${userItem.name.firstname} ${userItem.name.lastname}`}</td>
                                <td>{userItem.email}</td>
                                <td className='action-ceil'><Link onClick={() => handleEditUser(userItem)} to={`/registration?id=${userItem.id}`}><FiEdit /></Link> <Link to="#" onClick={() => handleDeleteUser(userItem.id)}><FiTrash/></Link></td>
                            </tr>
                        )
                    })} 
                </tbody>
            </TableItem>
        </>
    )

}

export default TableList;