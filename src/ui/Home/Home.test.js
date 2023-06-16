import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { exampleData } from '../../__mocks__/data-generator';

describe('Home component', () => {
  test('Home component is rendered', () => {
    // Act
    const { container } = render(<Home data={[]} total={0} />);
    // Assertions
    expect(container.querySelector('.home')).toBeTruthy();
  });
  test('Pagination component is rendered', () => {
    // Act
    const { container } = render(<Home data={[]} total={0} />);
    // Assertions
    expect(container.querySelector('.MuiPagination-root')).toBeTruthy();
  });
  test('Home component should render only 10 movies.', () => {
    // Act
    const { container } = render(
      <Home data={exampleData.entries} total={exampleData.total} />
    );

    // Assertions
    expect(container.getElementsByClassName('background').length).toBe(10);
  });
  test('Home component pagination should render only 3 pages.', () => {
    // Arrange
    const numberOfPages = exampleData.total / 10;
    const nextAndPreviousButtons = 2;

    // Act
    const { container } = render(
      <Home data={exampleData.entries} total={exampleData.total} />
    );

    // Assertions
    expect(container.getElementsByClassName('MuiButtonBase-root').length).toBe(
      numberOfPages + nextAndPreviousButtons
    );
  });
});
