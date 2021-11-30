import * as React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { server } from '../config/Path';
import { styles } from '../css/Styles';

let nome = ""
let email = ""
let cpf = ""
let usuario = ""
let senha = ""


export default function Cadastro(){

    // Vamos criar o estado inicial das caixas do formulário
    const[nomeCliente, setNomeCliente] = React.useState("");
    const[emailCliente, setEmailCliente] = React.useState("");
    const[cpfCliente, setCpfCliente] = React.useState("");
    const[usuarioCliente, setUsuarioCliente] = React.useState("");
    const[senhaCliente, setSenhaCliente] = React.useState("");


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro Cliente</Text>
            <View style={styles.controles}>
                <TextInput placeholder="Nome do Cliente" style={styles.input}onChangeText={(value)=>setNomeCliente(value)} 
                value={nomeCliente}/>

                <TextInput placeholder="E-Mail" keyboardType="email-address" style={styles.input}onChangeText={(value)=>setEmailCliente(value)} 
                value={emailCliente}/>

                <TextInput placeholder="CPF" keyboardType="number-pad" style={styles.input}onChangeText={(value)=>setCpfCliente(value)}
                value={cpfCliente}/>

                <TextInput placeholder="Usuário" style={styles.input}onChangeText={(value)=>setUsuarioCliente(value)} 
                value={usuarioCliente}/>

                <TextInput placeholder="Senha" secureTextEntry style={styles.input}onChangeText={(value)=>setSenhaCliente(value)} 
                value={senhaCliente}/>

                <TouchableOpacity style={styles.btnlogar} onPress={()=>{

                    nome = nomeCliente;
                    email = emailCliente;
                    cpf = cpfCliente;
                    usuario = usuarioCliente;
                    senha = senhaCliente;



                    efetuarCadastro()


                    setNomeCliente("");
                    setEmailCliente("")
                    setCpfCliente("")
                    setUsuarioCliente("")
                    setSenhaCliente("")
                }}>
                    <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function efetuarCadastro(){

// Faremos um fetch, ou seja, uma busca de dados por url em javaScript
fetch(`${server}/cadastro`,{
    method:"post",
    headers:{
        accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        nome:nome,
        email:email,
        cpf:cpf,
        usuario:usuario,
        senha:senha
    })
}).then((response)=>response.json())
.then((resultado)=>{
    Alert.alert("Aviso",resultado.output)
    // console.log(resultado)
}).catch((erro)=>console.error(`Erro ao executar->${erro}`))


}