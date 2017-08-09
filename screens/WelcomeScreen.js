import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobAPP', color: '#03A9F4' },
  { text: 'Use this app to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away',color: '#03A9F4'}
]

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    // Instance properties
    // react navigation automatically pass down navigation through props
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }
}

export default WelcomeScreen;