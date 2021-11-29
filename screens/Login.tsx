import * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../css/Styles';
import { server } from '../config/Path';


let us = ""
let sh = ""
let resultado: any = []

export default function Login({navigation}){

    const [ usuario, setUsuario] = React.useState("")
    const [ senha, setSenha] = React.useState("")

    return(
        <View style={styles.conteiner}>
          <Image source={require("../assets/icon.png")} style={styles.imglogo}/>

           <View style={styles.controles}>
              <TextInput placeholder="Usuário" style={styles.input}
              value={usuario} onChangeText={(value)=>setUsuario(value)}/>
              
              <TextInput placeholder="Senha" secureTextEntry style={styles.input}
              value={senha} onChangeText={(value)=>setSenha(value)}/>
            
               <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                  
                  us = usuario;
                  sh = senha;
                  let retorno = efetuarLogin();
                  
                  if(retorno[0] == "Logado"){
                      navigation.navigate("Home",{dados:retorno})
                  }
                }}>
                  <Text style={styles.txtbtnlogar}>Logar</Text>
               </TouchableOpacity>
           </View>

            <TouchableOpacity style={styles.btncadastrar} onPress={()=>{
                navigation.navigate("Cadastrar");
             }}>
                <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}


function efetuarLogin(){

    console.log(`${us} - ${sh}`)

    fetch(`${server}/login`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            usuario:us,
            senha:sh
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
        //console.log(rs);
        resultado [0] = rs.output
        resultado [1] = rs.payload
        resultado [2] = rs.token
    })
    .catch((erro)=>console.error(`Erro ao tentar buscar a api->${erro}`))
    return resultado
}