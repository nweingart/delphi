import React from 'react'
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native'
import { auth } from '../firebase/Firebase'
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigation = useNavigation()

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Daily")
      }
    })
    return unsubscribe
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(`logged in with email ${user.email}`)
      })
      .catch(error => alert(error.message))
  }

  const handleRegister = () => {
    navigation.navigate("Register")
  }



  return (
    <KeyboardAvoidingView
      platform="ios"
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text style={{...styles.bottomText, fontFamily: 'Georgia', color: '#C56E3F', fontSize: 12 }} onPress={handleRegister}>
          New to Delphi? Tap here to sign up
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
    borderRadius: 10,
    marginTop: 5,
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
    color: '#C56E3F',
    fontSize: 12,

  },
  bottomText: {
    fontWeight: '700',
    fontFamily: 'Georgia',
  }
})

export default Login
