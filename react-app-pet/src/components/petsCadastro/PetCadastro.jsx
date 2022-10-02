import React from 'react';

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

const PetCadastro = () => {
    return(
        <div>
            
        </div>
    )
}