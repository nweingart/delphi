import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.source}</Text>
          <Text style={styles.year}>{data.yearReleased}</Text>
        </View>
        <Text style={styles.quote}>{`"${data.quote}"`}</Text>
        <Text style={styles.author}>{data.author}</Text>
        <View style={styles.tags}>
          {data.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: height / 3,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#F2F2F2',
    borderColor: '#C56E3F',
    borderWidth: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: width * 0.05,
    marginVertical: 6,
    padding: 10,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: '#C56E3F',
    fontStyle: 'italic', // italic font for the title
  },
  year: {
    fontSize: 14,
    fontFamily: 'Times New Roman',
    color: '#000',
  },
  quote: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline', // underline for the quote
    paddingHorizontal: 10,
    marginTop: 10,
  },
  author: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tag: {
    fontFamily: 'Times New Roman',
    fontSize: 12,
    color: '#000',
    margin: 2,
  },
});

export default Card;

