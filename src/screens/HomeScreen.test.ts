import { render } from '@testing-library/react-native';
import React, { ReactElement } from 'react';

import { findIndex, insertNewMessage } from './HomeScreen';

const testQueue = [
  {
    first_name: "Saul",
    last_name: "Gerhold",
    priority: 17,
  },
  {
    first_name: "Sasha",
    last_name: "Pollich",
    priority: 18,
  },
  {
    first_name: "Bobbie",
    last_name: "Ruecker",
    priority: 23,
  }
];

const newCall = {
  first_name: "Sasha",
  last_name: "Pollich",
  priority: 21,
};

describe('it inserts a new call in to the correct sorted location', () => {
  test('get index for new call', () => {
    const index = findIndex(testQueue, 20);
    expect(index).toBe(2)
  });
  test('correctly inserts new item in to the existing queue', () => {
    const newArray = insertNewMessage([...testQueue], newCall);
    expect(newArray[2]).toBe(newCall);
  });
});
