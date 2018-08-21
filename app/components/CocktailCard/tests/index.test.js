import React from 'react';
import { mount } from 'enzyme';

import CocktailCard from '../index';

describe('<CocktailCard />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<CocktailCard className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <div>Hello world!</div>;
    const renderedComponent = mount(<CocktailCard item={content} />);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
