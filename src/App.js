import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="app">

      <header className="app-header">
        <h1>TP JSX &amp; Tests</h1>
        <p className="app-subtitle">JSX · HOC · Render Props · Testing Library</p>
      </header>

      <main className="app-main">

        {/* ── Étapes 2 & 4 : JSX vs React.createElement + bonnes pratiques ── */}
        <section className="section">
          <div className="section-label">Étapes 2 & 4 — JSX</div>
          <h2>JSX et sa transformation</h2>
          <p className="section-desc">
            JSX est du sucre syntaxique — Babel le compile en{' '}
            <code>React.createElement()</code> avant l'exécution.
          </p>
          <JSXDemo />
        </section>

        {/* ── Étape 5 : HOC withLogging ── */}
        <section className="section">
          <div className="section-label">Étape 5 — HOC</div>
          <h2>Higher-Order Component</h2>
          <p className="section-desc">
            withLogging enrichit Button sans le modifier. Ouvre la console (F12) pour voir les props loguées.
          </p>
          <div className="card">
            <ButtonWithLogging label="Cliquer ici" variant="primary" />
            <ButtonWithLogging label="Autre bouton" variant="secondary" />
          </div>
        </section>

        {/* ── Étape 6 : Render Props ── */}
        <section className="section">
          <div className="section-label">Étape 6 — Render Props</div>
          <h2>Composant DataLoader</h2>
          <p className="section-desc">
            DataLoader fournit les données, le consommateur décide de l'affichage via la prop <code>render</code>.
          </p>
          <div className="card">
            <DataLoader
              render={(data) => (
                <ul className="name-list">
                  {data.map((name) => (
                    <li key={name} className="name-item">{name}</li>
                  ))}
                </ul>
              )}
            />
          </div>
        </section>

        {/* ── Étape 8 : Test unitaire ── */}
        <section className="section">
          <div className="section-label">Étape 8 — Test unitaire</div>
          <h2>Composant Greeting</h2>
          <p className="section-desc">
            Testé dans <code>Greeting.test.js</code> avec <code>render</code> + <code>screen.getByText</code>.
          </p>
          <div className="card">
            <Greeting name="Alice" />
            <Greeting name="Abdelhadi" />
          </div>
        </section>

        {/* ── Étape 9 : Test d'intégration ── */}
        <section className="section">
          <div className="section-label">Étape 9 — Test d'intégration</div>
          <h2>Compteur interactif</h2>
          <p className="section-desc">
            Testé dans <code>Counter.test.js</code> avec <code>fireEvent.click</code> pour simuler un vrai clic.
          </p>
          <div className="card">
            <Counter />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
