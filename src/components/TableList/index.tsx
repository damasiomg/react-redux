import React from 'react';
import { TableItem } from './styles';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';



interface Users {
    id: number,
    name: string,
    email: string,
}

interface TableListProps {
    list: Users[]
}


const TableList: React.FC<TableListProps> = ({list}) => {

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
                    <tr>
                        <td>John Doe</td>
                        <td>john@gmail.com</td>
                        <td className='action-ceil'><Link to="/registration"><FiEdit /></Link> <a href="#"><FiTrash/></a></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>john@gmail.com</td>
                        <td className='action-ceil'><Link to="/registration"><FiEdit /></Link> <Link to="#"><FiTrash/></Link></td>
                    </tr>                    
                </tbody>
            </TableItem>
        </>
    )

}

export default TableList;