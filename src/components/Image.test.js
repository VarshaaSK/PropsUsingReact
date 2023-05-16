import { getByAltText, render, screen } from '@testing-library/react';
import Image from './Image';
import Data from './Data'


test("should check for the Images from Data file", () => {
    render(<Image data={Data} />);
    const altTexts = screen.getAllByAltText(/^[0-9]+$/); 
    expect(altTexts).toHaveLength(Data.length); 

    // console.log(altTexts);
    // console.log(Data.length);
    altTexts.forEach((altText, index) => {
        console.log(altText);
      expect(altText).toHaveAttribute('src', Data[index].img); 
    });
  });