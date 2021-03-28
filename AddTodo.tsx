import React, { useEffect, useState } from 'react';
import {Body, Button, Container,Content,Footer,FooterTab,Form,Header,Icon,Input,Item,Label,Left,Text, Title } from 'native-base';


export default function AddTodo(props: any) {
    const [text,setText] = useState("");
    return(
        <Container>
      <Header>
        <Body style={{alignItems: "center"}}>
          <Title>Add Todo</Title>
        </Body>
      </Header>
      <Content>
      <Form style={{margin:5}}>
            <Item inlineLabel>
              <Label>Title</Label>
              <Input onChangeText={setText} />
            </Item>
            <Button full success onPress={() =>{
                console.log("text added: ", text);
                props.addItem(text);
            }
                
            }><Text>Add</Text></Button>
          </Form>
      </Content>
      
    </Container>
    )
}