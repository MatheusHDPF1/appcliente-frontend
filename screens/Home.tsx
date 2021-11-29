import * as React from 'react';
import { Text, View } from 'react-native';
import { server } from '../config/Path';

export default function Home({route}){

    const {dados} = route.params
    console.log(`Dados na Home ->${dados[2]}`)

    React.useEffect(()=>{
      fetch(`${server}`,{
          method:'GET',
          headers:{
              accept:'application/json',
              'content-type':'application/json',
              'token':dados[2]
          }
      })
      .then ((response)=>response.json())
      .then((result)=>{
          console.log(result)
      })
      .catch((erro)=>console.error(`Erro ao ler a api ->${erro}`))
    },[])

    return(
        <View>
            <Text>Tela Home</Text>
        </View>
    )
}