import React from 'react';

/**
 * JSXDemo – montre côte à côte :
 *   1. La syntaxe JSX (sucre syntaxique de Babel)
 *   2. Son équivalent JavaScript pur (React.createElement)
 *
 * Sous le capot, Babel transforme tout JSX en React.createElement()
 * avant que le navigateur l'exécute.
 */
function JSXDemo() {
  // Syntaxe courte : Babel convertit ceci en React.createElement(...)
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  // Version explicite — exactement ce que Babel génère pour la ligne ci-dessus
  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div className="demo-box">
      <div className="demo-row">
        <span className="badge badge-jsx">JSX</span>
        {elementJSX}
      </div>

      <div className="demo-row">
        <span className="badge badge-js">React.createElement</span>
        {elementJS}
      </div>

      {/* htmlFor remplace for (mot réservé JS), className remplace class */}
      <div className="demo-row form-row">
        <label htmlFor="champ">Entrez votre nom :</label>
        <input id="champ" className="input-field" placeholder="ex : Alice" />
      </div>
    </div>
  );
}

export default JSXDemo;
