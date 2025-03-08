


import React, {  useContext, useState, useRef } from 'react';
import {  Text ,FlatList, SafeAreaView, ScrollView, View , StyleSheet, TextInput, Pressable } from 'react-native';
import { Taskes } from '../context/context';
import {
  Button ,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button"
import colors from "tailwindcss/colors"
import { AddIcon, ArrowRightIcon, CheckCircleIcon, EditIcon, MenuIcon, TrashIcon,  } from "@/components/ui/icon"
import { Center } from '@gluestack-ui/themed';
import { Card } from '@/components/ui/card';

const Completed = ({navigation , route  }) => {

  const { manegTaskes, setManegTasks } = useContext(Taskes); 


  return (

    <SafeAreaView style={styles.container} >

       <FlatList
             data={manegTaskes}
             renderItem={({ item }) =>
               <ScrollView>
                { item.complet == true &&
                <Card style={styles.card} >

                 <Text style={styles.Heading}> {item.title} </Text>
                 <Text style={styles.supject}> {item.supject} </Text>

                 </Card>  }
               </ScrollView>
             }
             keyExtractor={item => item.id.toString()}
           />


    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D6D7EF',
    justifyContent: "center",
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    height:82 ,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  Heading:{
    fontFamily: 'Jost',
    fontSize:13,
    fontWeight:600,
    color:'#9395D3'
  },
  supject:{
    fontFamily:'Jost',
    fontWeight: 400 ,
    fontSize: 10 ,
    color: '#000000'
    
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 19,
    
  },
  icon: {
    color:'#9395D3',
    backgroundColor: '#FFFFFF',
    height: 25,
    width: 25,
  },
  footer:{
    backgroundColor:'white' ,
    width:'100%' ,
    height:68,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonFooter:{
    // backgroundColor:'red' ,
     width:'50%' ,
      alignItems:'center' , 
      justifyContent:'center'
  },
 
  

});

export default Completed;







