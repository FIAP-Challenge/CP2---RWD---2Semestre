import React from 'react';
import React, { useEffect, useState } from "react";
import * as Yup from 'yup'

const DisplayingErrorMessagesSchema = Yup.object().shape({
    nome: Yup.string()
        .required('Campo obrigatório!'),
    idade: Yup.number()
        .max(21, "Idade acima do permitido")
        .required('Campo obrigatório!'),
    raca: Yup.string()
        .required('Campo obrigatório!'),
    tamanho: Yup.string()
        .required('Campo obrigatório!'),
    nomeDono: Yup.string()
        .required('Campo obrigatório!'),
    telDono: Yup.string()
        .required("Telefone é obrigatório")
});

const getLocalStorage = () => {
    const data = localStorage.getItem('lista')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const PetCadastro = () => {
    const [listaPet, setListaPet] = useState(getLocalStorage())

    const handleAddPets = (values) => {
        // values.preventDefault();
        setListaPet([...listaPet, values])
    }

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(listaPet))
    }, [listaPet])


    const remover = (i) => {
        let petRemover = listaPet;
        petRemover.splice(i, 1)
        setListaPet([...petRemover])
    
    }

    return(
        <div>
        {/* CONTINUA AE LUANNN... */}
        </div>
    )}
    export default PetCadastro;