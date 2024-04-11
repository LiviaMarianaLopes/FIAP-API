"use client";
import { useState } from "react";
import Button from "@/componentes/Button";
import FormInput from "@/componentes/FormInput";
import "./styles.css";

export default function Contato() {

    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");

    const nomeChange = (event: any) => {
        setNome(event.target.value);
    };

    const enderecoChange = (event: any) => {
        setEndereco(event.target.value);
    };

    const telefoneChange = (event: any) => {
        setTelefone(event.target.value);
    };

    const cepChange = (event: any) => {
        setCep(event.target.value);
    };   
    
    const sendForm = async () => {
        fetch("http://localhost:8080/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({ nome: nome, endereco: endereco, telefone: telefone, cep: cep})
      });
    };

    return (
        <>
        <div className="contato">
            <h1>Formulário☝</h1>
            <FormInput label="Nome" value={nome} onChange={nomeChange}/>
            <FormInput label="Endereço" value={endereco} onChange={enderecoChange}/>
            <FormInput label="Telefone" value={telefone} onChange={telefoneChange}/>
            <FormInput label="CEP" value={cep} onChange={cepChange}/>
            <Button text="ok" onClick={sendForm}></Button>
            <div></div>
        </div>
        </>
    )
}

