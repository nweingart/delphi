import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '../../firebase/Firebase'

import Card from '../../ui/Card';

const data = {
  "source": 'Meditations',
  "author": 'Marcus Aurelius',
  "category": 'Philosophy',
  "quote": 'You have power over your mind - not outside events. Realize this, and you will find strength.',
  "tags": ['Stoicism', 'Self-Reflection', 'Wisdom'],
  "year": '180 AD',
}


const { width, height } = Dimensions.get('window');

const DailyPage = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [isEditing, setIsEditing] = useState(true);


  const handleSave = () => {
    if (isEditing) {
      console.log('Saved entry:', journalEntry);
    }
    setIsEditing(!isEditing); // toggle the isEditing state
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily</Text>
      <Card data={data} />
      <View style={styles.contentContainer}>
        <TextInput
          style={[styles.input, !isEditing && styles.disabled]} // apply disabled styles conditionally
          multiline
          onChangeText={setJournalEntry}
          value={journalEntry}
          placeholder="Write your journal entry here..."
          editable={isEditing} // enable editing when isEditing is true
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>{isEditing ? 'Save Entry' : 'Edit Entry'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  quote: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    marginBottom: 20,
  },
  input: {
    width: width * 0.9,
    height: height / 6, // smaller height
    borderColor: '#C56E3F',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    fontFamily: 'Times New Roman',
    fontSize: 18,
    textAlignVertical: 'top', // align text to the top on Android
  },
  disabled: {
    backgroundColor: '#D3D3D3', // grayed-out background color
  },
  saveButton: {
    width: width * 0.5,
    height: 50,
    backgroundColor: '#C56E3F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Times New Roman',
    fontSize: 18,
  },
});

export default DailyPage;

