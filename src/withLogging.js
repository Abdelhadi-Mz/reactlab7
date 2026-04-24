/**
 * Higher-Order Component (HOC) : withLogging
 *
 * Un HOC est une fonction qui prend un composant en entrée
 * et retourne un NOUVEAU composant enrichi.
 * Ici on ajoute du logging automatique sans toucher au composant d'origine.
 *
 * @param {React.ComponentType} WrappedComponent - Le composant à enrichir
 * @returns {React.ComponentType} - Le composant enrichi
 */
function withLogging(WrappedComponent) {
  // Le composant enrichi a le même comportement + le logging en bonus
  return function EnhancedComponent(props) {
    // S'exécute à chaque rendu du composant
    console.log(`[withLogging] <${WrappedComponent.name}> — props reçues :`, props);

    // On rend le composant original en lui passant toutes ses props intactes
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;
