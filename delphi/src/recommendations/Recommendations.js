import { db } from '../firebase/Firebase'
import { collection, getDocs } from 'firebase/firestore';
import natural from 'natural';

// Initialize Firebase


// Retrieve content from Firestore and perform TF-IDF calculations

// Perform TF-IDF calculations
const performTFIDF = (contentData) => {
  // Preprocess content data and extract text for TF-IDF
  const documents = contentData.map((content) => content.text);

  // Create TF-IDF vectorizer
  const tfidf = new natural.TfIdf();

  // Add documents to the vectorizer
  documents.forEach((document) => {
    tfidf.addDocument(document);
  });

  // Get TF-IDF scores for terms
  const terms = ['term1', 'term2', 'term3'];

  terms.forEach((term) => {
    tfidf.tfidfs(term, (index, score) => {
      console.log(`TF-IDF score for term "${term}" in document ${index}: ${score}`);
    });
  });
};

const fetchContentAndPerformTFIDF = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Content'));
    const contentData = querySnapshot.docs.map((doc) => doc.data());

    // Perform TF-IDF calculations
    performTFIDF(contentData);
  } catch (error) {
    console.error('Error fetching content:', error);
  }
};

// Start the process
fetchContentAndPerformTFIDF()
  .then(() => {console.log('Done!')})
  .catch((err) => {console.log(err)})
