import React from 'react';

import FoodItem from '../components/FoodItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'FoodItem',
  component: FoodItem,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FoodItem {...args} />;

//👇 Each story then reuses that template
export const MexicanFood = Template.bind({});
MexicanFood.args = {
  changeFoodName: () => console.log('clicked!!'),
  id: 1,
  name: 'Taquitos',
  price: 4.50,
  country: 'Mexico'
};

//👇 Each story then reuses that template
export const CanadianFood = Template.bind({});
CanadianFood.args = {
  changeFoodName: () => console.log('clicked!!'),
  id: 1,
  name: 'Poutine',
  price: 10,
  country: 'Canada'
};