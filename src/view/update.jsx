import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import { Taskes } from "../context/context";
import { Button, ButtonText } from "@/components/ui/button";
// import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-native-uuid';
import { Box } from "@/components/ui/box";


const Updatee = ({ navigation , route}) => {
  const { manegTaskes, setManegTasks } = useContext(Taskes);

  // console.log(route.params);
  // console.log(manegTaskes);
   

  const [title, setTitle] = useState("");
  const [supject, setSupject] = useState("");


  useEffect(() => {
    setTitle(route.params?.title );
    setSupject(route.params?.supject );
}, [route.params]);

const saveUpdate = () => {
  setManegTasks(
    manegTaskes.map((task) =>
      task.id === route.params.id
        && { ...task, title, supject }
    )
  );

  navigation.goBack();  
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "center", margin: 10, fontSize: 20 }}>TO DO APP</Text>

      <TextInput style={styles.input} placeholder="Title" onChangeText={setTitle} value={title} />
      <TextInput style={styles.input} placeholder="Subject" onChangeText={setSupject} value={supject} />
      
      
       <Box style={{flexDirection: 'row', justifyContent:'space-around'}}>

      <Button style={styles.button} onPress={saveUpdate} >
        <ButtonText style={{ fontFamily: 'Jost', fontWeight: '400', fontSize: 15, color: '#FFFFFF', alignItems: 'center', paddingTop: 20 }}>
          Update</ButtonText>
      </Button>
    
      <Button style={styles.button} onPress={()=>navigation.goBack()}>
        <ButtonText style={{ fontFamily: 'Jost', fontWeight: '400', fontSize: 15, color: '#FFFFFF', alignItems: 'center', paddingTop: 20 }}>
          Cancel</ButtonText>
      </Button>

      </Box>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  input: {
    padding: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#9395D3',
    width: 170,
    height: 65,
    borderRadius: 15,
    marginTop:15,
    alignItems: 'center',
  }
});

export default Updatee;