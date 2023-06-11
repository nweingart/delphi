import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import QuotesScreen from './Quotes'
import MeditationsScreen from './Meditations'
import JournalEntriesScreen from './Journals'

const Explore = () => {
  const [selectedTab, setSelectedTab] = useState('Quotes')

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Quotes' && styles.selectedTab]}
          onPress={() => setSelectedTab('Quotes')}
        >
          <Text style={[styles.tabText, selectedTab === 'Quotes' && styles.selectedTabText]}>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Meditations' && styles.selectedTab]}
          onPress={() => setSelectedTab('Meditations')}
        >
          <Text style={[styles.tabText, selectedTab === 'Meditations' && styles.selectedTabText]}>Meditations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Journal Entries' && styles.selectedTab]}
          onPress={() => setSelectedTab('Journal Entries')}
        >
          <Text style={[styles.tabText, selectedTab === 'Journal Entries' && styles.selectedTabText]}>Journal Entries</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Quotes' && <QuotesScreen />}
      {selectedTab === 'Meditations' && <MeditationsScreen />}
      {selectedTab === 'Journal Entries' && <JournalEntriesScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    elevation: 2,
    paddingTop: 70,  // Adjust as needed
  },
  tab: {
    paddingBottom: 10, // Adjust as needed
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#C56E3F',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  selectedTabText: {
    color: '#C56E3F', // the color for selected tab text
  },
});

export default Explore


