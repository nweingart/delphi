import React, { useState, useRef } from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';
import SoundPlayer from 'react-native-sound';

const WhisperAPIExample = () => {
  const [audioUrl, setAudioUrl] = useState('');
  const soundPlayerRef = useRef(null);

  const handleTextToSpeech = async () => {
    const text = 'Your text to convert to audio';

    // Set up the HTTP request
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
    };

    try {
      // Send the text to the Whisper API for text-to-speech conversion
      const response = await axios.post(
        'https://api.whisper.ai/speech/synthesize',
        { text },
        config
      );

      // Process the API response
      const { data } = response;
      const audioUrl = data.audio_url;

      // Set the audio URL
      setAudioUrl(audioUrl);
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Text-to-speech error:', error);
    }
  };

  const playAudio = () => {
    if (audioUrl) {
      // Initialize the sound player with the audio URL
      const sound = new SoundPlayer(audioUrl, '', error => {
        if (error) {
          console.error('Audio playback error:', error);
        } else {
          // Start playing the audio
          sound.play();
        }
      });

      // Store the sound player reference for later use (e.g., stopping or releasing the audio)
      soundPlayerRef.current = sound;
    }
  };

  const stopAudio = () => {
    if (soundPlayerRef.current) {
      // Stop the audio playback
      soundPlayerRef.current.stop();
    }
  };

  return (
    <View>
      <Button title="Convert to Audio" onPress={handleTextToSpeech} />
      <Button title="Play Audio" onPress={playAudio} />
      <Button title="Stop Audio" onPress={stopAudio} />
    </View>
  );
};

export default WhisperAPIExample;

