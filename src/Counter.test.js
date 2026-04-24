import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

/**
 * Test d'intégration : vérifie le comportement après interaction utilisateur.
 *
 * fireEvent.click() → simule un vrai clic sur le bouton
 * Après le clic, React met à jour l'état → le DOM se met à jour → on vérifie.
 */
test('incrémente le compteur au clic', () => {
  render(<Counter />);

  // État initial : compteur à 0
  expect(screen.getByText('Compteur : 0')).toBeInTheDocument();

  // Simule un clic sur le bouton "+"
  const button = screen.getByText('+');
  fireEvent.click(button);

  // Après le clic, le compteur doit afficher 1
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});

test('incrémente plusieurs fois', () => {
  render(<Counter />);
  const button = screen.getByText('+');

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText('Compteur : 3')).toBeInTheDocument();
});
