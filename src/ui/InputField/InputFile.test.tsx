import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField component', () => {
  test('Header renders text input field with search icon', () => {
    // Act
    render(<InputField filterText='' setFilterText={() => {}} />);

    // Assertions
    expect(screen.getByTestId('SearchIcon')).toBeTruthy();
  });
  test('Header renders text input field with filter text entered', () => {
    // Arrange
    const testText = 'Test text';
    // Act
    render(<InputField filterText={testText} setFilterText={() => {}} />);

    // Assertions
    expect(screen.getByDisplayValue(testText)).toBeTruthy();
  });
});
