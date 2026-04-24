import { useState } from 'react';

/**
 * Composant Counter utilisé pour le test d'intégration.
 * Gère un état local `count` et l'incrémente au clic.
 */
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-widget">
      <p>Compteur : {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
