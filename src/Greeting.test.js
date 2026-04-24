import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

/**
 * Test unitaire : vérifie que Greeting affiche le bon texte.
 *
 * render()       → monte le composant dans un DOM virtuel
 * screen.getByText() → cherche un élément contenant ce texte exact
 * toBeInTheDocument() → assertion fournie par @testing-library/jest-dom
 */
test('affiche le message correct', () => {
  render(<Greeting name="Alice" />);
  // Si le texte n'est pas trouvé, le test échoue avec un message clair
  expect(screen.getByText('Bonjour, Alice')).toBeInTheDocument();
});

test('affiche un autre nom correctement', () => {
  render(<Greeting name="Abdelhadi" />);
  expect(screen.getByText('Bonjour, Abdelhadi')).toBeInTheDocument();
});
