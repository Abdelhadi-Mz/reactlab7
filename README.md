# TP 7 : Comprendre JSX, la composition avancée et les tests React

---

# Étape 1 – Objectif

Ce TP permet de comprendre :

- Le fonctionnement de JSX
- La transformation JSX → JavaScript
- Les bonnes pratiques JSX
- Les Higher-Order Components (HOC)
- Les tests React avec Testing Library

---

# Étape 2 – Explorer JSX et sa transformation

## Objectif

Comprendre comment JSX est converti en JavaScript pur par Babel.

---

## Créer `JSXDemo.js`

Dans `src/`, créer le fichier :

```javascript
function JSXDemo() {
  const elementJSX = (
    <h1 className="titre">
      Bonjour JSX
    </h1>
  );

  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div>
      {elementJSX}
      {elementJS}
    </div>
  );
}

export default JSXDemo;
```

---

## Explication

- `elementJSX` : syntaxe JSX simplifiée
- `React.createElement` : version JavaScript générée
- JSX est compilé automatiquement par Babel

---

# Étape 3 – Remarque pédagogique

JSX n’est PAS du HTML :

- Il est transformé en JavaScript
- Il utilise `React.createElement` en interne

---

# Étape 4 – Bonnes pratiques JSX

## Modifier `JSXDemo.js`

Ajouter un `label` et un `input` :

```javascript
function JSXDemo() {
  const elementJSX = (
    <h1 className="titre">
      Bonjour JSX
    </h1>
  );

  return (
    <div>
      {elementJSX}

      <label htmlFor="champ">
        Entrez votre nom :
      </label>

      <input id="champ" />
    </div>
  );
}

export default JSXDemo;
```

---

## Conseils importants

✔ utiliser `className` au lieu de `class`  
✔ utiliser `htmlFor` au lieu de `for`  
✔ toujours fermer les balises (`<input />`)  

---

# Étape 5 – Créer un Higher-Order Component (HOC)

## Objectif

Ajouter une fonctionnalité commune (logging) à plusieurs composants.

---

## Créer `withLogging.js`

```javascript
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props reçues :", props);

    return <WrappedComponent {...props} />;
  };
}

export default withLogging;
```

---

## Créer `Button.js`

```javascript
function Button(props) {
  return (
    <button>
      {props.label}
    </button>
  );
}

export default Button;
```

---

## Créer `ButtonWithLogging.js`

```javascript
import withLogging from './withLogging';
import Button from './Button';

const ButtonWithLogging =
  withLogging(Button);

export default ButtonWithLogging;
```

---

## Modifier `App.js`

```javascript
import ButtonWithLogging from './ButtonWithLogging';

function App() {
  return (
    <div>
      <h1>TP JSX et Composition</h1>

      <ButtonWithLogging
        label="Cliquer ici"
      />
    </div>
  );
}

export default App;
```

---

# Étape 6 – Comprendre la composition avancée

Un HOC permet :

- de réutiliser de la logique
- d’envelopper un composant
- d’ajouter des comportements sans modifier le composant original

---

# Étape 7 – Tester les composants React

## Installer les dépendances (si nécessaire)

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

---

# Étape 8 – Créer `Counter.js`

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Compteur : {count}
      </p>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        +
      </button>
    </div>
  );
}

export default Counter;
```

---

# Étape 9 – Test d’intégration avec interaction

## Créer `Counter.test.js`

```javascript
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';

import Counter from './Counter';

test(
  'incrémente le compteur au clic',
  () => {
    render(<Counter />);

    const button = screen.getByText('+');

    fireEvent.click(button);

    expect(
      screen.getByText('Compteur : 1')
    ).toBeInTheDocument();
  }
);
```

---

## Explication du test

- `render()` affiche le composant
- `screen.getByText()` trouve un élément
- `fireEvent.click()` simule un clic
- `expect()` vérifie le résultat

---

# Résultat attendu

✔ JSX compris et manipulé  
✔ Utilisation des bonnes pratiques JSX  
✔ Création d’un HOC fonctionnel  
✔ Test React fonctionnel avec interaction  

---

# Lancer les tests

```bash
npm test
```

---

# Synthèse du TP

Ce TP permet de maîtriser :

- JSX et sa compilation
- règles JSX importantes
- composition avancée (HOC)
- tests unitaires et d’intégration React
- interactions utilisateur simulées

---

# Fin du TP

Vous comprenez maintenant comment :

- JSX est transformé
- React compose les composants
- tester une interface utilisateur React efficacement