import React from 'react';
import { FloatItem } from './styles';


interface FloatingButtonProps {
    route: string
}


const FloatingButton: React.FC<FloatingButtonProps> = ({route}) => {

    return (
        <>
            <FloatItem>
                <a href='#'>&#43;</a>
            </FloatItem>
        </>
    )

}

export default FloatingButton;