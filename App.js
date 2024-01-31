import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

const Stack = createStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Aller à IUC', key: '1' },
    { text: 'Faire Java', key: '2' },
    { text: 'Rentrer à 12 heures', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data = {todos}
            renderItem = {({ item })=>(
              <TodoItem item = {item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
      <View style={styles.textes}>
        <Text style={styles.text}>par Ng Bony</Text>
        <Text>temps de réalisation: 140 minutes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },

  textes: {
    position: 'absolute',
    display: 'flex',
    left: 200,
    padding: 10,
    justifyContent: '',
    backgroundColor: 'lightblue',
    height: 50,
    width: 220,
    borderRadius: 20,
    top: 800
  },

  text: {
    fontWeight: 'bold',
    fontSize: 14,
  }
})