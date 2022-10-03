import React, { useEffect, useState } from "react";
// import './styleCadastro.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import InputMask from 'react-input-mask';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiDeleteBinLine } from 'react-icons/ri';

import { DivMaster, DivInput, DivErro, DivButton, ButtonSubmit, Img, ButtonDelete, DivNoContent } from './Styled'

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
            <div className="form-dog">
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
                                    <DivErro>
                                        {touched.nome && errors.nome && <div>{errors.nome}</div>}
                                    </DivErro>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="idade">Idade *</label>
                                    <Field className="inputs" type="number" name="idade" placeholder={"Idade"} />
                                    <DivErro>
                                        {touched.idade && errors.idade && <div>{errors.idade}</div>}
                                    </DivErro>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="raca">Raça *</label>
                                    <Field className="inputs" name="raca" placeholder={"Raça"} />
                                    <DivErro>
                                        {touched.raca && errors.raca && <div>{errors.raca}</div>}
                                    </DivErro>
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
                                    <DivErro>
                                        {touched.tamanho && errors.tamanho && <div>{errors.tamanho}</div>}
                                    </DivErro>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="nomeDono">Nome do dono *</label>
                                    <Field className="inputs" name="nomeDono" placeholder={"Nome do dono"} />
                                    <DivErro>
                                        {touched.nomeDono && errors.nomeDono && <div>{errors.nomeDono}</div>}
                                    </DivErro>
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
                                    <DivErro>
                                        {touched.telDono && errors.telDono && <div>{errors.telDono}</div>}
                                    </DivErro>
                                </DivInput>

                                <DivInput>
                                    <label htmlFor="imagemPet">Imagem pet</label>
                                    <Field className="inputs " name="imagemPet" placeholder="URL da imagem" />
                                    <DivErro>
                                        {touched.imagemPet && errors.imagemPet && <div>{errors.imagemPet}</div>}
                                    </DivErro>
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

                                    <DivErro>
                                        {touched.observacoes && errors.observacoes && <div>{errors.observacoes}</div>}
                                    </DivErro>
                                </DivInput>

                                <DivButton>
                                    <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
                                </DivButton>

                            </div>

                        </Form>
                    )}
                </Formik>
            </div>

            <div className="listarPets">
                {listaPet.length ? (<TableContainer className="table" component={Paper}>
                    <Table sx={{ minWidth: 1000 }} size="normal" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Imagem</b></TableCell>
                                <TableCell align="center"><b>Nome</b></TableCell>
                                <TableCell align="center"><b>Idade</b></TableCell>
                                <TableCell align="center"><b>Raça</b></TableCell>
                                <TableCell align="center"><b>Tamanho</b></TableCell>
                                <TableCell align="center"><b>Nome dono</b></TableCell>
                                <TableCell align="center"><b>Telefone</b></TableCell>
                                <TableCell align="center"><b>Observações</b></TableCell>
                                <TableCell align="center"><b>Deletar</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listaPet.map((row, i) => (
                                <TableRow
                                    key={row.nome}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Img src={row.imagemPet ? row.imagemPet : 'https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg'} />
                                    </TableCell>
                                    {/* <TableCell align="right">{row.imagemPet}</TableCell> */}
                                    <TableCell align="center">{row.nome}</TableCell>
                                    <TableCell align="center">{row.idade}</TableCell>
                                    <TableCell align="center">{row.raca}</TableCell>
                                    <TableCell align="center">{row.tamanho}</TableCell>
                                    <TableCell align="center">{row.nomeDono}</TableCell>
                                    <TableCell align="center">{row.telDono}</TableCell>
                                    <TableCell align="center">{row.observacoes}</TableCell>
                                    <TableCell align="center"><ButtonDelete onClick={() => { remover(i) }}><RiDeleteBinLine className="iconDelete" /></ButtonDelete></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                ) :
                    (
                        <DivNoContent>

                            <p>Não há nenhum pet cadastrado</p>

                        </DivNoContent>

                    )}




            </div>


        </DivMaster >
    )
}
export default PetCadastro;