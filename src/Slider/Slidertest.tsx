import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from './Slider';

test('renders learn react link', () => {
  render(<Slider price={50} setPrice={() => { }} min={50} max={900} />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
