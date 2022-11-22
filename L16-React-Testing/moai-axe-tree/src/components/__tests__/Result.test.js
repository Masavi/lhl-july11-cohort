import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import the library to be mocked
import axios from 'axios';

// tell jest to mock the library}
jest.mock('axios');

const fakeData = [
  {
    "id": 1,
    "name": "Ana",
    "points": 10
  },
  {
    "id": 2,
    "name": "Bob",
    "points": 7
  },
  {
    "id": 3,
    "name": "Charlie",
    "points": 3
  }
];

test('can display results from an API call', () => {
  // tell jest how to handle all axios GET requests
  const response = { data: fakeData };
  axios.get.mockResolvedValue(response);

  // render the Result component
  const { getByTestId, findByText } = render(<Result status="Waiting" />);

  // find the "fetch high scores" button
  const highScoresButton = getByTestId('high-scores'); 

  // click on the "feth high scores" button
  fireEvent.click(highScoresButton);

  // check to see if our fake data has been loaded
  return findByText('Ana', { exact: false });
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
