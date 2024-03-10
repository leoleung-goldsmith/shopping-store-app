/**
 * @format
 */

import 'react-native';
import App from '../App';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});