import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  test('Header renders logo', () => {
    // Act
    const { container } = render(
      <Header filterText='' setFilterText={() => {}} />
    );

    // Assertions
    expect(container.querySelector('.dreadfulLogo')).toBeTruthy();
  });
  test('Header renders text input field', () => {
    // Act
    const { container } = render(
      <Header filterText='' setFilterText={() => {}} />
    );

    // Assertions
    expect(container.querySelector('.inputFilter')).toBeTruthy();
  });
});
