import styled from "styled-components";

export const DivMaster = styled.div`

    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    .form-dog{
    
    border-radius: 4px;
    background: #ffffff;
    padding: 20px;
    margin: 50px 0px;
    width: 81%;
    max-width: 500px;
    box-shadow: -1px 0px 14px 4px #00000063;
    }

    
 
`;


export const DivInput = styled.div`


        display: flex;
        margin: 18px 0px;
        flex-direction: column;

        
    input.inputs {
        padding-left: 5px;
        margin-top: 5px;
        border: none;
        width: 99%;
        height: 30px;
        background: #9c9c9cdb;
    }
     

    
    select.inputs {
        padding-left: 5px;
        margin-top: 5px;
        border: none;
        width: 100%;
        height: 30px;
        background: #9c9c9cdb;
    }
    
    input.observacao {
        height: 100px;
    }
    
    textarea.inputs {
        padding-left: 5px;
        margin-top: 5px;
        border: none;
        width: 100%;
        height: 70px;
        background: #9c9c9cdb;
    }
    

`


export const DivErro = styled.div`
  
        color: rgb(255, 38, 38);
    
`

export const DivButton = styled.div`

    display: flex;
    justify-content: center;


`


export const ButtonSubmit = styled.button`

    width: 90%;
    height: 35px;
    border: none;
    border-radius: 5px;
    background: #93e41c;

`


export const Img = styled.img`
 
        object-fit: cover;
        background-color: #aaa;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        overflow: hidden;
        position: relative;
    

`


export const ButtonDelete = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    color: red;
`

export const DivNoContent = styled.div`

    width: 1000px;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

`
