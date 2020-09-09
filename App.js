import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,StyleSheet, FlatList,Text, Button, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MovieList from './MovieList'
import Movie from './MovieList'
import Details from './Details'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "Movie" component={Movie}/>
      <Stack.Screen name = "Details" component ={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 16,
  

  },

  item: {
    flex:1,
    padding: 10,
    paddingTop:10,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 32,
    fontWeight:"bold",
  },
  title: {
    fontSize: 40,
    fontWeight:'bold'
    
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  description:{
    fontSize:20,
    marginBottom:100,
  },
  fruitPic:{
    resizeMode:'contain',
    padding:20,
    marginBottom:0,
    height: 200,
    width: 1000,
    marginTop: 0,
    alignItems:'flex-start',
   


  },
  backButton:{
    paddingTop:20,
    marginTop:20,

  },
  itemButton:{
    backgroundColor:"black",
    fontWeight:"bold",
    backgroundColor:"#ffa500"
  },

 
});
