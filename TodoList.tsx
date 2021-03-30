import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import {Body, Button, CheckBox, Container,Content,Footer,FooterTab,Header,Icon,Item,Left,List,ListItem,Right,Text, Title } from 'native-base';
import { Entypo } from '@expo/vector-icons'; 


export default function TodoList(props: any) {

    const updateCheckbox = (id:number) => {
        const updatedList = props.list.map((item:any)=> {
            if(item.id == id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        });
        props.setTodoList(updatedList);
    }

    const deleteTodoItem = (id:number) => {
        const updatedList = props.list.filter((item:any) => {
            return item.id != id;
        })
        
        props.setTodoList(updatedList);
    }

    return(
        <List>
            {
                props.list.map((item:any) => (
                    <ListItem key={item.id} >
                        <Text style={{flex:2}}>{item.id}</Text>
                        <View  style={{flex:2}}>
                            <CheckBox  color="green" checked={item.completed} onPress= {()=>{
                                updateCheckbox(item.id);
                            }} />
                        </View>
                        <Text  style={{flex:8}} >{item.title}</Text>
                        <Entypo name="trash" size={24} color="black"  style={{flex:2}} onPress={() => {
                            deleteTodoItem(item.id);
                        }} />
                    </ListItem>
                ))
            }
            
        </List>
    )
}
