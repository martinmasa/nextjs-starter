import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Home from '../../pages/index';

describe('Home page', () => {
  afterEach(cleanup);

  test('renders the title', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('page-title').textContent).toBe('Home');
  });

  test('renders the content', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('page-content').textContent).toBe('This is the home page!');
  });
});
