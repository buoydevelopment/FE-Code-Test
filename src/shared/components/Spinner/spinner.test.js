import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('<Spinner />', () => {
  it('Should render', () => {
    const wrapper = shallow(<Spinner
      message={'Loading ...'} />);
    expect(wrapper).toMatchSnapshot();
  });
});