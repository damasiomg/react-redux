import styled, {css} from 'styled-components';

export const TableItem = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;    thead tr {
        background-color: #8257e5;
        color: #ffffff;
        text-align: left;
    }

    th, td {
        padding: 12px 15px; 
    }

    tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
        border-bottom: 2px solid #8257e5;
    }

    th:first-of-type {
        border-top-left-radius: 10px;
    }

    th:last-of-type {
        border-top-right-radius: 10px;
    }

    tr:last-of-type td:first-of-type {
        border-bottom-left-radius: 10px;
    }

    tr:last-of-type td:last-of-type {
        border-bottom-right-radius: 10px;
    }

    td.ceil-name{
        text-transform: capitalize;
    }
`;