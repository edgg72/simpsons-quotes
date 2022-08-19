import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import CharacterInfo from '../CharacterInfo'

test("Default request to not be undefined", async () => {
  render(<CharacterInfo />);

})