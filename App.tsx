import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import {Body, Button, Container,Content,Footer,FooterTab,Header,Icon,Left,Text, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


function getFullName(firstName: string, secondName: string, lastName: string) {
  return firstName + " " + secondName + " " + lastName;
}
export default function Cat() {
  var name = getFullName("Kashif", "Aleem", "Sukkurwala");
 
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "first item",
      completed: false
    },
    {
      id:2,
      title: "second item",
      completed: false
    }
  ])
  const [isReady, setIsReady] = useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    (
      
      async() => {
        console.log('hi');
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        //alert('hi');
        setIsReady(true);
      }
    )();
  }, []);

  const addTodoItem = (todoText: string) => {
    const todoItem  = {
      id: counter,
      title: todoText,
      completed: false
    }
    setCounter(counter + 1);
    setTodoList([...todoList, todoItem])
    setShowAddTodo(false);
  }
  if(!isReady)
  {
    return (
    <Text>Loading... Ready? {  isReady.toString()}</Text>
    )
  }

  if(showAddTodo)
  {
    return <AddTodo addItem={addTodoItem}  />
  }
  return (
    <Container>
      <Header>
        {/* <Left>
          <Button transparent>
            <Icon name="menu"></Icon>
          </Button>
        </Left> */}
        <Body style={{alignItems: "center"}}>
          <Title>Header</Title>
        </Body>
      </Header>
      <Content>
        <Text>
          Hello To Do
        </Text>
        <Button full info style={{marginHorizontal:20}} 
        onPress={()=> setShowAddTodo(true)}
        ><Text>Add Todo</Text></Button>
        <TodoList list={todoList} setTodoList= {setTodoList}/>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
