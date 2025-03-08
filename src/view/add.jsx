


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
import colors, { blue } from "tailwindcss/colors"
import { AddIcon, ArrowRightIcon, CheckCircleIcon, EditIcon, MenuIcon, TrashIcon,  } from "@/components/ui/icon"
import { Center } from '@gluestack-ui/themed';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
// import { red } from 'react-native-reanimated/lib/typescript/Colors';

const Add = ({navigation , route  }) => {

  const { manegTaskes, setManegTasks } = useContext(Taskes); 

// const [all]
//  const taskss = route.params?.taskes;
// console.log(taskss);

const deletTask = (taskId) => {
  setManegTasks(manegTaskes.filter(item => item.id !== taskId));
};
  return (

    <SafeAreaView style={styles.container} >

       <FlatList
             data={manegTaskes}
             renderItem={({ item }) =>
               <ScrollView>
                <Card style={styles.card} >

                 <Text style={styles.Heading}> {item.title} </Text>
                 <Text style={styles.supject}> {item.supject} </Text>

                 <View style={styles.iconContainer} >

        <Button onPress={()=> navigation.navigate("Updatee" , item ) }  style={{backgroundColor:"red" , }}> 
          <ButtonIcon as={EditIcon} style={styles.icon} /> 
          </Button >  

               <Button   onPress={()=>{deletTask(item.id);}} >
                 <ButtonIcon as={TrashIcon}   style={styles.icon} />
                  </Button>
                  
               <Button onPress={()=>{item.complet = true ; console.log(item.complet); }}>
                 <ButtonIcon as={CheckCircleIcon} style={styles.icon} />
                  </Button> 

                 </View>
                 </Card>
                
               </ScrollView>
             }
             keyExtractor={item => item.id.toString()}
           />


<Button
  style={{ height: 70, width: 70,  backgroundColor:'#9395d3' , borderRadius:75 , justifyContent:"center" ,  alignItems: "center" , position:'absolute', top : 570 , right: 20}} 
  onPress={() => navigation.navigate('main')}
>
        <ButtonIcon as={AddIcon} style={{ height: 23, width: 21  }} /> 
</Button>



 {/* ((((((((((((((     FOOTER   )))))))))))))) */}
 <Box style={styles.footer}>

 <Button
  style={styles.buttonFooter} 
  
>
        <ButtonIcon as={MenuIcon} style={{ height: 23, width: 21  }} />
        <ButtonText>All</ButtonText>
</Button>



<Button
  style={styles.buttonFooter} 
  onPress={() => navigation.navigate('completed')}
>
        <ButtonIcon as={ArrowRightIcon} style={{ height: 23, width: 21  }} />
          <ButtonText>completed</ButtonText>
</Button>

 </Box>


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
  iconFooter:{

  }
  

});

export default Add;







