/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import TextFilter from '../TextFilter';

describe('alpha/v3/search/TextFilter', () => {
  it('renders input with given value', () => {
    const wrapper = shallow(
      <TextFilter
        value="foo"
        onChange={() => {
          /* noop */
        }}
      />,
    );

    expect(wrapper.find('input').prop('value')).toEqual('foo');
  });
});
