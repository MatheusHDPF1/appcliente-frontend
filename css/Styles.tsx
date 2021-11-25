import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imglogo:{
        width:100,
        height:100,
        resizeMode:"cover"
    },
    controles:{
        width:'80%',
        padding:10,
        margin:20,
        shadowColor:'black',
        shadowOffset:{width:30, height:10},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:10,
        backgroundColor:"white"
    },
    input:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        padding:5,
        marginBottom:10,
        fontSize:15,
    },
    btnlogar:{
        padding:30,
    },
    txtbtnlogar:{
        textAlign:'center',
        color:"teal",
    },
    btncadastrar:{
        position:'absolute',
        bottom:100,
        backgroundColor:'#000',
        padding:20,
        borderRadius:50,
    },
    txtbtncadastrar:{
        fontSize:20,
        fontWeight:"bold",
        color:"#A3B5D1",
        textTransform:"uppercase"

    }
})