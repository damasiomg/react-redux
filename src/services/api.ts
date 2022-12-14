import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {                  
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization", 
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"                   
    },
});

export default api;