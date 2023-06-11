import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Meditations = () => {
  return (
    <View style={styles.container}>
      <Text>Meditations</Text>
    </View>
  )


};

const styles = StyleSheet.create({
  container: { // Adjust the value as needed
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Meditations
