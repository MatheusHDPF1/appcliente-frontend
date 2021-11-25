import * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../css/Styles';
import { server } from '../config/path';

export default function Login({navigation}){
    return(
        <View style={styles.conteiner}>
          <Image source={require("../assets/icon.png")} style={styles.imglogo}/>

        <View style={styles.controles}>
            <TextInput placeholder="Usuário" style={styles.input}/>
            <TextInput placeholder="Senha" secureTextEntry style={styles.input}/>
            <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                navigation.navigate("Home");
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