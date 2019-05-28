import{
    GET_CLIENTE,
    ADD_CLIENTE,
    UPDATE_CLIENTE,
    REMOVE_CLIENTE,
    SET_CLIENTE,
    SET_ORDENACAO,
    SET_PESQUISA
    
    
}from './types';

const getDate= () => new Date().getTime();
const generateId = () => Math.floor(Math.random()* 100000 + 1000000)

const prepararCliente = (cliente) =>{
    const id = generateId();
    const criadoEm = getDate();
    const atualizadoEm = getDate();
    return {...cliente, id, criadoEm, atualizadoEm};
}

const data =[ 
    {
        id:1,
        nome:'bruno',
        telefone:'9882-45859',
        email:'bruno@gmail.com',
        criadoEm: getDate(),
        atualizadoEm: getDate()
    }
    //estrutura do banco de dados
];


export const getClientes = () => ({ type:GET_CLIENTE, data});

export const addCliente = (cliente) => ({type:ADD_CLIENTE, cliente: prepararCliente(cliente)});

export const updateCliente = (id, cliente) => ({ type:UPDATE_CLIENTE, cliente: {id, ...cliente, atualizadoEm:getDate()}});//objeto ira pegar tudo que esta no cliente e ira adiciobar as informaçoes no "ID"

export const removeCliente = (id) => ({ type:REMOVE_CLIENTE, id });

//actions de apoio
export const setClienteParaAlterar = (cliente) => ({type: SET_CLIENTE, cliente})
export const setOrdenacao = (ev) =>({type: SET_ORDENACAO, ordenacao: ev.target.value})
export const setPesquisa = (ev) =>({type: SET_PESQUISA, pesquisa: ev.target.value})