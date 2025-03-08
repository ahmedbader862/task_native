import React, { useContext, useState } from "react";
import { Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import { Taskes } from "../context/context";
import { Button, ButtonText } from "@/components/ui/button";
// import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-native-uuid';


const HelloWorldApp = ({ navigation }) => {
  const { manegTaskes, setManegTasks } = useContext(Taskes);

  const [title, setTitle] = useState("");
  const [supject, setSupject] = useState("");

  const addTask = () => {
    if (title.trim() === "" || supject.trim() === "") return;

    const newTask = { title, supject, id: uuid.v4() , complet:false};

    setManegTasks([...manegTaskes, newTask]);

    setTitle("");
    setSupject("");

    navigation.replace("Add");
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={{ textAlign: "center", margin: 10, fontSize: 20 }}>TO DO APP</Text>

      <TextInput style={styles.input} placeholder="Title" onChangeText={setTitle} value={title} />
      <TextInput style={styles.input} placeholder="Subject" onChangeText={setSupject} value={supject} />

      <Button style={styles.button} onPress={addTask}>
        <ButtonText style={{ fontFamily: 'Jost', fontWeight: '600', fontSize: 20, color: '#FFFFFF', alignItems: 'center', paddingTop: 17 }}>ADD</ButtonText>
      </Button>

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
    width: 286,
    height: 65,
    borderRadius: 15,
    marginHorizontal: 35,
    alignItems: 'center',
  }
});

export default HelloWorldApp;