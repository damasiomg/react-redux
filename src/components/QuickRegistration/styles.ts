import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;


    input {
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px;
        color: #3a3a3a;
        border: 1px solid #ced4da;

        &::placeholder {
            color: #a8a8b3;
        }

        &:focus{
            border-color: rgb(130, 87, 229);
        }
    }

    button{
        height: 50px;
        padding: 8px;
        background: #8257e5;
        border-radius: 5px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color .2s;
        &:hover{
            background: ${shade(.2, '#8257e5')};
        }

    }

`;