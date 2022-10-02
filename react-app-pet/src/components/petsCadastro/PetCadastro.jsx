import React, { useEffect, useState } from "react";
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik';
import InputMask from 'react-input-mask';
import { DivMaster, FormDog, Input, DivInput } from './Styled'

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

    return (

        <DivMaster>
            <FormDog>
                <Formik
                    initialValues={{
                        nome: '',
                        idade: '',
                        raca: '',
                        tamanho: '',
                        nomeDono: '',
                        telDono: '',
                        imagemPet: '',
                        observacoes: ''
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={(values, { resetForm }) => {
                        handleAddPets(values)
                        resetForm();

                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="container-class">

                                <div>
                                    <h2>Cadastre seu pet</h2>
                                </div>

                                <DivInput>
                                    <label htmlFor="nome">Nome *</label>
                                    <Field className="inputs" name="nome" placeholder={"Nome"} />
                                    <div className="error">
                                        {touched.nome && errors.nome && <div>{errors.nome}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="idade">Idade *</label>
                                    <Field className="inputs" type="number" name="idade" placeholder={"Idade"} />
                                    <div className="error">
                                        {touched.idade && errors.idade && <div>{errors.idade}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="raca">Raça *</label>
                                    <Field className="inputs" name="raca" placeholder={"Raça"} />
                                    <div className="error">
                                        {touched.raca && errors.raca && <div>{errors.raca}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="tamanho">Tamanho *</label>
                                    <Field id="tamanho" className="inputs" as="select" name="tamanho">
                                        <option value="" defaultValue>Selecione</option>
                                        <option value="Filhote">Filhote</option>
                                        <option value="Pequeno">Pequeno</option>
                                        <option value="Médio">Médio</option>
                                        <option value="Grande">Grande</option>
                                    </Field>
                                    <div className="error">
                                        {touched.tamanho && errors.tamanho && <div>{errors.tamanho}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="nomeDono">Nome do dono *</label>
                                    <Field className="inputs" name="nomeDono" placeholder={"Nome do dono"} />
                                    <div className="error">
                                        {touched.nomeDono && errors.nomeDono && <div>{errors.nomeDono}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="telDono">Telefone do dono *</label>
                                    <Field id="telDono" name="telDono" className="inputs"
                                        render={({ field }) => (
                                            <InputMask className="inputs"
                                                {...field}
                                                mask="(99) 99999-9999"
                                                placeholder='Celular'
                                                id="telDono"
                                                name="telDono"

                                            />
                                        )} />
                                    <div className="error">
                                        {touched.telDono && errors.telDono && <div>{errors.telDono}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="imagemPet">Imagem pet</label>
                                    <Field className="inputs " name="imagemPet" placeholder="URL da imagem" />
                                    <div className="error">
                                        {touched.imagemPet && errors.imagemPet && <div>{errors.imagemPet}</div>}
                                    </div>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="observacoes">Observações</label>
                                    <Field name="observacoes" className="inputs"
                                        render={({ field }) => (
                                            <textarea
                                                name="observacoes"
                                                className="inputs" {...field}>

                                            </textarea>
                                        )} />

                                    <div className="error">
                                        {touched.observacoes && errors.observacoes && <div>{errors.observacoes}</div>}
                                    </div>
                                </DivInput>

                                <div className="div-button">
                                    <button type="submit">Cadastrar</button>
                                </div>

                            </div>

                        </Form>
                    )}
                </Formik>
            </FormDog>
        </DivMaster >
    )
}
export default PetCadastro;