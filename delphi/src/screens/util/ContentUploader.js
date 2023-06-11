import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { db } from '../../firebase/Firebase'
import {collection, addDoc} from 'firebase/firestore'
import { contentData } from "../../data";

const ContentUploader = () => {

  const uploadDocuments = async (data) => {
    try {
      for (const obj of data) {
        await addDoc(collection(db, 'Content'), obj);
      }
      console.log('Documents created successfully!');
    } catch (error) {
      console.error('Error creating documents:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => uploadDocuments(contentData)}>
        <Text>Content Uploader</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#C56E3F',
    borderRadius: 6,
  }
})

export default ContentUploader
