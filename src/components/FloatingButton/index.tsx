import React from 'react';
import { FloatItem } from './styles';
import { Link } from 'react-router-dom';


interface FloatingButtonProps {
    route: string
}


const FloatingButton: React.FC<FloatingButtonProps> = ({route}) => {

    return (
        <>
            <FloatItem>
                <Link to={route}>&#43;</Link>
            </FloatItem>
        </>
    )

}

export default FloatingButton;