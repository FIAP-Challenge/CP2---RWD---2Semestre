import styled from "styled-components";

export const DivMaster = styled.div`

    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FormDog = styled.form`

    background: #ffffff;
    padding: 20px;
    margin: 50px 0px;
    width: 81%;
    max-width: 500px;
    box-shadow: -1px 0px 14px 4px #00000063;
`;

export const Input = styled.div`

    padding-left: 5px;
    margin-top: 5px;
    border: none;
    width: 99%;
    height: 30px;
    background: #9c9c9cdb;
`;

export const DivInput = styled.div`

    display: flex;
    margin: 18px 0px;
    flex-direction: column;
`;

export const DivError = styled.div`

    color: rgb(255, 38, 38);
`;

export const SelectInputs = styled.input`

    padding-left: 5px;
    margin-top: 5px;
    border: none;
    width: 100%;
    height: 30px;
    background: #9c9c9cdb;
`;

export const InputObs = styled.input`

    height: 100px;
`;

export const InputsTexterra = styled.input`

    padding-left: 5px;
    margin-top: 5px;
    border: none;
    width: 100%;
    height: 70px;
    background: #9c9c9cdb;
`;

export const DivButton = styled.div`

    display: flex;
    justify-content: center;
`;

export const Button = styled.button`

    width: 90%;
    height: 35px;
    border: none;
    border-radius: 5px;
    background: #93e41c;
`;

export const Img = styled.img` 

    object-fit: cover;
    background-color: #aaa;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    overflow: hidden;
    position: relative;
`;

export const ButtonDelete = styled.button`

    background: none;
    border: none;
    font-size: 20px;
    color: red;
`;

export const DivNoContent = styled.div`

    width: 1000px;
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;