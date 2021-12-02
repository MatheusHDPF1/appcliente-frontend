import  * as React from 'react';
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { server } from '../config/Path';
import { styles } from '../css/Styles';
import {MaterialIcons} from '@expo/vector-icons';

let idcliente = ""
let nome = ""
let email = ""
let rs = ""


export default function Atualizar({route}){
     const {cliente} = route.params
     const {token} = route.params
     rs = token
     console.log(`Tela Atualizar ->${cliente.usuario}`)
     console.log(`Token no atualizar${token}`)

     const [nomecliente,SetNomeCliente] = React.useState(cliente.nome)
     const [emailcliente,SetEmailCliente] = React.useState(cliente.email)
     idcliente = cliente._id

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atualizar Dados</Text>
            <View style={styles.controles}>
                <TextInput placeholder="Nome do Cliente" style={styles.input} 
                value={nomecliente} onChangeText={(value)=>SetNomeCliente(value)}/>

                <TextInput placeholder="E-Mail" keyboardType="email-address" style={styles.input} 
                value={emailcliente} onChangeText={(value)=>SetEmailCliente(value)}/>
            </View>
            <View>
               <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                   nome = nomecliente
                   email = emailcliente

                   efetuarAtualizacao();

                   SetNomeCliente('')
                   SetEmailCliente('')
               }}>
                    <Text style={styles.btnlogar}>Atualizar os dados</Text>
                </TouchableOpacity>
            </View>

               <TouchableOpacity style={styles.apagar} onPress={()=>{

                   excluirUsuario()
               }}>
                 <MaterialIcons name="delete" size={24} color="red" />
                 <Text style={styles.txtbtnapagar}>Apagar a Conta</Text>
               </TouchableOpacity>

        </View>
    )
}

function efetuarAtualizacao(){

    fetch(`${server}/atualizar/${idcliente}`,{
        method: 'PUT',
        headers:{
            accept:'application/json',
            'content-type':'application/json',
            "token":rs
        },
        body:JSON.stringify({
            nome:nome,
            email:email
        })
    }).then((response)=>response.json())
    .then((rs)=>{
        Alert.alert("atualização",rs.output)
    })
    .catch((erro)=>console.error(`Erro ao tentar ler a api ->${erro}`))
}

function excluirUsuario(){

    var r = false

    Alert.alert("Atenção","Você deseja mesmo apagar esta conta?",[
        {
            text:"Cancelar",
            onPress:()=>{}
        },
        {
            text:"Apagar",
            onPress:()=> { 
                fetch(`${server}/apagar/${idcliente}`,{
                method:"DELETE",
                headers:{
                    accept:"application/json",
                    "content-type":"application/json",
                    "token":rs
                }    
            }).then((response)=>response.status)
            .then((dados)=>{
                if(dados.toString() == "204") {
                     Alert.alert("Apagado", "Conta excluida")
                }
                else{
                    Alert.alert("Atenção", "Não foi possível apagar conta")
                }
            })
            .catch((erro)=>console.error(`Erro ao ler a api -> ${erro}`))}
        },
    ])

}