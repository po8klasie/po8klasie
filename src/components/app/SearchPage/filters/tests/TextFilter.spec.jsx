/* global describe, it, expect */
import React from 'react';
import TextFilter from '../TextFilter';
import { render, screen } from '@testing-library/react';

describe('alpha/v3/search/TextFilter', () => {
  it('renders input with given value', () => {
    render(
      <TextFilter
        value="foo"
        onChange={() => {
          /* noop */
        }}
      />,
    );

    expect(screen.getByRole('textbox').value).toEqual('foo');
  });
});
