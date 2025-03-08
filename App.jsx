import { NavigationContainer } from "@react-navigation/native";
import HelloWorldApp from "./src/view/main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Add from "./src/view/add";
import { Taskes } from "./src/context/context";
import { useState } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed"; 
import "nativewind";
import Completed from "./src/view/completed";
import Updatee from "./src/view/update";




// import  "lucide-react-native"


const Stack = createNativeStackNavigator();


function App() {
const [manegTaskes, setManegTasks] = useState([]);

  return (

      // <Taskes.Provider value={{manegTaskes,setManegTasks}}>
      <Taskes.Provider value={{ manegTaskes,setManegTasks }}>


    <NavigationContainer>

    <Stack.Navigator>

     <Stack.Screen name="Add" component={Add} options={{title: 'Add'}} />

     
    <Stack.Screen name="main" component={HelloWorldApp}  />


    <Stack.Screen name="completed" component={Completed}  />
    

    <Stack.Screen name="Updatee" component={Updatee}  />
      
         
          
       


   {/* <HelloWorldApp/> */}

   </Stack.Navigator>

  </NavigationContainer>

  </Taskes.Provider>

  );
}

export default App;


























































// // import { Card, Heading } from 'native-base';
// import { Card, Icon } from '@gluestack-ui/themed';
// import React, {  useState } from 'react';
// import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
// // import { Card } from './components/ui/card/index.web';
// // import { Card } from "@gluestack-ui/themed";
// import mainee from './src/view/main'
// import {
//   Camera,
// } from "lucide-react-native"

// const HelloWorldApp = () => {

//   const [title, setTitle] = useState('');
//   const [supject , setSupject] = useState('');
//   const [id , setId] = useState(0);
//   const [task, setTask] = useState([]);
 
//   const addTask = ()=>{
//     setId(id+1);
//     setTask([...task, { title, supject , id }]);
//     setTitle('');
//     setSupject('');
//   }
  
//   const deletTask = (taskId) => {
//     setTask(task.filter(item => item.id !== taskId));
//   };
  
  

//   return (

//     <SafeAreaView style={styles.container}>
//       <Text style={{textAlign:'center' , margin:10}} > TO DO APP </Text>
//         <TextInput
//         style={ {  padding: 25 , borderColor: 'gray' , borderWidth: 1 , borderRadius: 10 }}
//         placeholder="title"
//         keyboardType="text"
//         onChangeText={setTitle}
//         value={title}
//       />
//        <TextInput
//         style={{ padding: 25, borderColor: 'gray', borderWidth: 1 , margin: 10 , borderRadius: 10 }}
//         placeholder="supject"
//         keyboardType="text"
//         onChangeText={setSupject}
//         value={supject}
//       />
      
//       <Card size="md" variant="elevated" className="m-3">
//       {/* <Text size="sm">Start building your next project ites</Text> */}
//     </Card>
//     <Icon className="text-typography-500" as={Camera} />
//       <Button
//         onPress={() => {
//           addTask();
//         }}
//         title="Add"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
       
//        <FlatList 
//         data={task}
//         renderItem={({item}) =>
        
//         <ScrollView >

//            <Text style={{textAlign:'center',fontSize:30}} > {item.title} </Text>
//            <Text> {item.supject} </Text>
//            <Text> {item.id} </Text>
//            {/*    */}
//            <Button
//            onPress={() => {
//            deletTask(item.id);
//           }}
//         title="Delet"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//            </ScrollView>    
      
//       }
//         keyExtractor={item => item.supject}
//       />

//       {/* {task.map((taskes) => (

//         <Text> {taskes.title} </Text>

        
//       ))} */}
//     </SafeAreaView>
//   );
// };
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
    
//   },
// });

// export default HelloWorldApp;
