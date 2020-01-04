import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/reducer/todo";
import { Header, Left, Right, Body, Container, Content, Text, Toast, Title, Button } from 'native-base';


export default function Todo() {
  const [todo, setTodo] = useState("");
  const showToast = useState(false)
  const dispatch = useDispatch();
  const todos = useSelector<any, Array<string>>(state => state.todos);

  const addTodoOnPress = () => {
    if (todo === "") {
      return;
    }
    dispatch(addTodo(todo));
    setTodo("");  
  };

  const removeTodoOnPress = (key) => {
    dispatch(removeTodo(key));
    // Toast.show({
    //   text: "DONE!!",
    //   buttonText: "Okay",
    //   duration: 3000
    // })
  };

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left/>
        <Body>
          <Title>Todoist</Title>
        </Body> 
        <Right/>
      </Header>
      <Content >
        <TextInput value={todo} onChangeText={t => setTodo(t)} style={styles.text}></TextInput>
        <Button onPress={addTodoOnPress} ><Text>ADD</Text></Button>
        {todos.map((t, i) => (
          <View style={styles.todo_container} key={i}>
            <Text style={styles.text}>{t}</Text>
            <Button onPress={() => removeTodoOnPress(i)} style={styles.button}><Text>DEL</Text></Button>
          </View>
        ))}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312934",
  },
  header: {
    backgroundColor: "#312934",
  },
  todo_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%'
  },
  text:{
    color: "#fff",
    margin: 16,
    fontSize: 16,
    width: '70%'
  },
  button: {
    margin: 16
  }
});