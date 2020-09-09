import React from 'react';
import { View, Text , ScrollView, StyleSheet, Image} from 'react-native';

export default function Details(props){
    const item= props.route.params.item;
    
    return (<ScrollView>
        <Text style={styles.head}>{item.title}</Text>
        <Image style ={styles.image} source={require("./assets/StarWars.jpeg") } />
        <Text style ={styles.body}>Released on : {item.releaseYear}</Text>
        </ScrollView>
    );  
}

const styles = StyleSheet.create({
    head:{
        fontSize: 35,
        textAlign: "center",
        marginTop: 2,
        fontWeight: "700",
        fontStyle: "italic",
        textDecorationLine: "underline",
    },
    body:{
        fontSize: 24,
        margin: 20,
        color: "#000"
    },
    image: {
        width: 390,
        height: 300,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 9,
        justifyContent:'center'
      },
    

    
});