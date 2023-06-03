import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { auth, db } from '../firebase/Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDoc, doc } from "firebase/firestore";


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userFirstName, setUserFirstName] = useState('')

  const navigation = useNavigation()

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(`logged in with email ${user.email}`)
        setDoc(doc(db, "users", email), {
          email: email,
          firstName: userFirstName,
        })
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Daily")
      }
    })
    return unsubscribe
  }, [])

  const handleLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#C56E3F', marginBottom: 25, fontFamily: 'Times New Roman' }}>Delphi</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="first name"
          value={userFirstName}
          onChangeText={text => setUserFirstName(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text style={{ ...styles.bottomText, color: '#C56E3F'}} onPress={handleLogin}>
          Already have an account? Login here
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  logoWrapper: {
    position: 'absolute',
    top: '20%',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    fontFamily: 'Georgia',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#34788C',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#F2F2F2',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Georgia',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  register: {
    marginTop: 50,
  },
  bottomText: {
    fontWeight: '700',
    fontSize: 12,
    fontFamily: 'Georgia',
  }
})

export default Register
