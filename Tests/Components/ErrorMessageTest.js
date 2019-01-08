import 'react-native'
import React from 'react';
import ErrorMessage from '../../App/Components/ErrorMessage';//Import component to test

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ErrorMessage message="The connection to the server has failed."/>).toJSON();//Pass the component to test to the create function
  expect(tree).toMatchSnapshot();
});

test('renders correctly with a default message', () => {
  const tree = renderer.create(<ErrorMessage />).toJSON();//Pass the component to test to the create function
  expect(tree).toMatchSnapshot();
});
