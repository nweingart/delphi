import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Card from '../ui/Card'

const ExploreScreen = () => {
  const data = [
    {
      source: 'Meditations',
      author: 'Marcus Aurelius',
      category: 'Philosophy',
      quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
      tags: ['Stoicism', 'Self-Reflection', 'Wisdom'],
      yearReleased: '180 AD',
    },
    {
      source: 'Beyond Good and Evil',
      author: 'Friedrich Nietzsche',
      category: 'Philosophy',
      quote: 'He who fights with monsters should be careful lest he thereby become a monster. And if thou gaze long into an abyss, the abyss will also gaze into thee.',
      tags: ['Existentialism', 'Morality', 'Will to Power'],
      yearReleased: '1886 AD',
    },
    {
      source: 'The Republic',
      author: 'Plato',
      category: 'Philosophy',
      quote: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
      tags: ['Political Philosophy', 'Justice', 'Ideal State'],
      yearReleased: '380 BC',
    },
    {
      source: 'The Birth of Tragedy',
      author: 'Friedrich Nietzsche',
      category: 'Philosophy',
      quote: 'We have art in order not to die of the truth.',
      tags: ['Aesthetics', 'Dionysian', 'Apollonian'],
      yearReleased: '1872 AD',
    },
    {
      source: 'The Prince',
      author: 'Niccolò Machiavelli',
      category: 'Philosophy',
      quote: 'It is better to be feared than loved, if you cannot be both.',
      tags: ['Political Science', 'Leadership', 'Realism'],
      yearReleased: '1532 AD',
    },
    {
      source: 'Critique of Pure Reason',
      author: 'Immanuel Kant',
      category: 'Philosophy',
      quote: 'Concepts without intuitions are empty, intuitions without concepts are blind.',
      tags: ['Epistemology', 'Metaphysics', 'Ethics'],
      yearReleased: '1781 AD',
    },
    {
      source: 'Critique of Pure Reason',
      author: 'Immanuel Kant',
      category: 'Philosophy',
      quote: 'Concepts without intuitions are empty, intuitions without concepts are blind.',
      tags: ['Epistemology', 'Metaphysics', 'Ethics'],
      yearReleased: '1781 AD',
    },
    {
      source: 'Thus Spoke Zarathustra',
      author: 'Friedrich Nietzsche',
      category: 'Philosophy',
      quote: 'What is great in man is that he is a bridge and not an end.',
      tags: ['Existentialism', 'Superman', 'Eternal Recurrence'],
      yearReleased: '1883 AD',
    },
    {
      source: 'The Ethics',
      author: 'Baruch Spinoza',
      category: 'Philosophy',
      quote: 'In nature there is nothing contingent, but all things are conditioned to exist and operate in a particular manner by the necessity of the divine nature.',
      tags: ['Ethics', 'Determinism', 'Pantheism'],
      yearReleased: '1677 AD',
    },
    {
      source: 'Critique of Practical Reason',
      author: 'Immanuel Kant',
      category: 'Philosophy',
      quote: 'Two things fill the mind with ever-increasing wonder and awe, the more often and the more intensely the mind of thought is drawn to them: the starry heavens above me and the moral law within me.',
      tags: ['Ethics', 'Moral Philosophy', 'Autonomy'],
      yearReleased: '1788 AD',
    },
    {
      source: 'The Tao of Pooh',
      author: 'Benjamin Hoff',
      category: 'Philosophy',
      quote: 'When you know and respect your own inner nature, you know where you belong. You also know where you don’t belong.',
      tags: ['Eastern Philosophy', 'Taoism', 'Simplicity'],
      yearReleased: '1982 AD',
    },

    // Add more objects representing content data here
  ]

  const renderCard = ({ item }) => <Card data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, // Adjust the value as needed
    flex: 1,
  },
})

export default ExploreScreen
