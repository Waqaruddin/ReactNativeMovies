import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView,StyleSheet, FlatList,Text, Button, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';





const DATA = [

  {
    id: 'item1',
    title: 'Inception',
  },
  {
    id: 'item2',
    title: 'Shutter Island',

  },
  {
    id: 'item3',
    title: 'Predestination',

  },
  {
    id: 'item4',
    title: 'Memento',

  },
  {
    id: 'item5',
    title: 'Identity',

  },



];


function DetailsScreen({navigation})   {

 

return(
    <SafeAreaView style = {styles.item} >

       <FlatList
        style = {styles.title}
          data={DATA}
          renderItem = {({ item }) => (
 
            <View style = {styles.item}>
            <Button title = {item.title} style={{backgroundColor:"#FF8C00"}}  onPress= {() => navigation.navigate(item.title) }>

            </Button>

            </View>

          )}
        keyExtractor ={item =>item.id}
          />
        
    </SafeAreaView>

    
);


};


function item1({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Inception.jpg')}
      style={styles.fruitPic} />

     <Text style= {styles.title}> Inception</Text>
     <Text style = {styles.description}> Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability 
     to enter people's dreams and steal their secrets from their subconscious. 
     His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves.
     </Text>
     <Button style = {styles.backButton}title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}


function item2({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/ShutterIsland.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Shutter Island</Text>
     <Text style = {styles.description}> The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) 
     and his new partner (Mark Ruffalo) to 
     Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}



function item3({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Predestination.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Predestination</Text>
     <Text style = {styles.description}> A temporal agent (Ethan Hawke) embarks on a final time-traveling assignment to prevent 
     an elusive criminal from launching an attack that kills thousands of people.
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}



function item4({navigation}){
  return(
   <View style= {styles.container}>
      <Image
      source={require('./assets/Memento.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Memento</Text>
     <Text style = {styles.description}> Leonard (Guy Pearce) is tracking down the man who raped and murdered his wife. The difficulty, 
     however, of locating his wife's killer is compounded by the fact that he suffers from a rare, untreatable form of memory loss
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}


function item5({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Identity.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Identity</Text>
     <Text  style = {styles.description} > When a vicious storm breaks out in the Nevada desert, 
     10 people seek refuge in an isolated motel. At the same time, a serial killer (Pruitt Taylor Vince) 
     under the care of psychiatrist Doctor Mallick (Alfred Molina) -- who has just found the killer's revealing journal -- 
     awaits execution for murdering a group of motel guests.
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}



const Stack = createStackNavigator();


export default function App() {
  return ( 


    <NavigationContainer>

<Stack.Navigator>
        <Stack.Screen  name="Details" component={DetailsScreen} options={{
          title:'Movies List' , headerStyle: {
            backgroundColor: '#f4511e',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf:"center",
            textAlign:"center"
            
            
          },
        }}/>

        <Stack.Screen  name="Inception" component={item1}  
        options={{
          title:'Inception' , headerStyle: {
            backgroundColor: '#f4511e',
            },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf:"center",
             textAlign:"center"
          },
        }} />
        <Stack.Screen name="Shutter Island" component={item2}    options={{
          title:'Shutter Island' , headerStyle: {
            backgroundColor: '#f4511e',
            },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf:"center",
            textAlign:"center"
          },
        }} />
        <Stack.Screen name="Predestination" component={item3}   options={{
          title:'Predestination' , headerStyle: {
            backgroundColor: '#f4511e',
            },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf:"center",
            textAlign:"center"
          },
        }}  />
        <Stack.Screen name="Memento" component={item4}      options={{
          title:'Memento' , headerStyle: {
            backgroundColor: '#f4511e',
            },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf:"center",
            textAlign:"center"
          },
        }} />
        <Stack.Screen name="Identity" component={item5}   options={{
          title:'Identity' , headerStyle: {
            backgroundColor: '#f4511e',
            },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf:"center",
            textAlign:"center"
          },
        }} />


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
    width: 200,
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
