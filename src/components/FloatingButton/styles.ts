import styled, {css} from 'styled-components';

export const FloatItem = styled.div`
    position: fixed;
    color: #fff;
    bottom: 30px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #9466ff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

    &:hover{
        background: #734bd1;
    }

    a{
        color: #fff;
        font-size: x-large;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
    }
`