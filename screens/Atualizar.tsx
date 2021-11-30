import  * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../css/Styles';

export default function Atualizar({route}){
     const {cliente} = route.params
     console.log(`Tela Atualizar ->${cliente}`)
    return(
        <View style={styles.container}>
            <Text>Tela Atualizar</Text>
        </View>
    )
}