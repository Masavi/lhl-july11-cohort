import React from 'react';
import Game from '../Game';
import { fireEvent, prettyDOM, render } from '@testing-library/react';

test('can toggle the cheating state by clicking on the robot head', () => {
  const { container, debug, getByTestId } = render(<Game />)
  // console.log(prettyDOM(container));
  debug();

  // find the robot head icon
  const robotHeadIcon = getByTestId('robot-head')

  // click on the robot head icon
  fireEvent.click(robotHeadIcon);

  // check to see if the robot head has the class "cheating"
  expect(robotHeadIcon).toHaveClass('cheating');

  // click again on the robot head icon
  fireEvent.click(robotHeadIcon);

  // check to see that the robot head DOES NOT have the class "cheating"
  expect(robotHeadIcon).not.toHaveClass('cheating');
})