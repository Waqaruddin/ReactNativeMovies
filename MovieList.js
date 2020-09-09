import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Movie({navigation}){

const url ="https://reactnative.dev/movies.json"
const [data, setData]  = useState([])
fetch(url).then(response=> response.json()).then(responseJSON=> setData(responseJSON.movies) )

return (
        <SafeAreaView style={styles.container}>

        <FlatList
            data= {data}
            renderItem = {({item}) => {
                return (
                <Text style ={styles.title}  onPress={() => navigation.navigate("Details",{item:item})}>{item.title}</Text>
                );
            }}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: "#c8e7e4"
},
    back:{
        backgroundColor: "#c8e7e4"
    },
    head:{
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        color: "#636363",
    },
    view:{
        margin: 5,
        padding: 5
    },
    desc:{
        marginLeft: 15,
        fontSize: 17,
        color: "#ac9b79",
        marginBottom:15
    },

    title: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: "700",
      color: '#000',
      fontStyle: "italic",
      textDecorationLine: "underline",
    },

    listItem: {
      backgroundColor: '#fff',
      marginLeft: 6,
      marginRight: 6,
      marginTop: 3,
      paddingTop: 3,
      paddingLeft: 30,
      paddingRight: 30,
    },
});