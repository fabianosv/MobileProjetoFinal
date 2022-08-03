import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View amimation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}
          >
          <Text style={styles.buttonTextRegister}>Não possui uma conta ? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04B404'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },

  containerForm:{
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    fontSize: 20,
    marginTop: 28,
  },
  
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  buttonLogin:{
    backgroundColor: '#04B404',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },

  buttonTextRegister:{
    color: '#a1a1a1',
  }

})