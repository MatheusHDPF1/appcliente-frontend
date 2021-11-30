import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native';
import { server } from '../config/Path';
import { styles } from '../css/Styles';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Atualizar from './Atualizar';

const Stack = createNativeStackNavigator();
let rs = ""
export default function Home({route}){
    const {dados} = route.params;
    rs = dados[2]
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="TelaHome" component={TelaHome}/>
                <Stack.Screen name="Atualizar" component={Atualizar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

 function TelaHome({navigation}){

    console.log(`Dados na Home ->${rs}`)

    const[lstCliente, setLstCliente] = React.useState([])

    React.useEffect(()=>{
      fetch(`${server}`,{
          method:'GET',
          headers:{
              accept:'application/json',
              'content-type':'application/json',
              'token':rs,
          }
      })
      .then ((response)=>response.json())
      .then((result)=>{
          console.log(result)
          setLstCliente(result.output)
      })
      .catch((erro)=>console.error(`Erro ao ler a api ->${erro}`))
    },[])

    return(
        <View style={styles.container}>

            <ScrollView horizontal={false} style={styles.scroll}>
              <Image source={{uri:"https://alfapeople.com/me/wp-content/uploads/sites/25/2020/08/microsoft-forms-pro-now-microsoft-dynamics-365-customer-voice.jpeg"}} style={styles.imgcliente}/>
              <View>
                {
                  lstCliente.map((item,index)=>(
                    <View style={styles.cliente} key={index}>
                       <Text style={styles.nome}>Nome:{item.nome}</Text>
                       <Text style={styles.cpf}>CPF:{item.cpf}</Text>
                       <Text style={styles.email}>E-mail:{item.email}</Text>
                       <Text style={styles.usuario}>Usuario:{item.usuario}</Text>
                       <TouchableOpacity onPress={()=>{
                           navigation.navigate("Atualizar",{cliente:item})
                      }}
                      >
                         <FontAwesome5 name="user-edit" size={20} color="black" />
                       </TouchableOpacity>
                       
                    </View>
                  ))
                }
              </View>
            </ScrollView>
        </View>
    )
}