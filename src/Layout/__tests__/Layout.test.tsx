import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

describe('layout', () => {
  it('should render successfully', () => {
    expect.assertions(2);

    const { container, getByText } = render(<Layout>Test 1</Layout>);

    expect(getByText('Test 1')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
