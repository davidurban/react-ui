import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Icon from '..';

jest.mock('../load-material-design-icons');

describe('rendering', () => {
  it('renders correctly mandatory props only', () => {
    const tree = shallow(<Icon
      icon="book"
    />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('renders correctly with all props', () => {
    const tree = shallow(<Icon
      icon="book"
      id="custom-id"
      size="larger"
    />);

    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
