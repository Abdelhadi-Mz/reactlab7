import withLogging from './withLogging';
import Button from './Button';

/**
 * Button enrichi par le HOC withLogging.
 * Chaque rendu affiche les props dans la console du navigateur.
 * On n'a PAS modifié Button.js — c'est tout l'intérêt du HOC.
 */
const ButtonWithLogging = withLogging(Button);

export default ButtonWithLogging;
