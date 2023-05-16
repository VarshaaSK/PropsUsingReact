import { getByAltText, render, screen } from '@testing-library/react';
import App from './App';

test('should check if there is a heading', () => {
  render(<App />);
  const heading = screen.getByText("Kalvium Education");
  expect(heading).toBeInTheDocument();
});

test("should check for the image", () => {
  render(<App/>)
  const altImage = screen.getByAltText("Kalvium Icon");
  expect(altImage).toBeInTheDocument();
})

it("should check for the paragraph" , () => {
  render(<App/>)
  const paraTag = screen.getByTestId("paragraph-description");
  expect(paraTag).toBeInTheDocument();
})
