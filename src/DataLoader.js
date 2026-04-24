/**
 * Render Props pattern.
 *
 * DataLoader gère LA DONNÉE, mais délègue L'AFFICHAGE
 * à la fonction passée via la prop `render`.
 * Cela rend le composant totalement réutilisable pour n'importe quel rendu.
 *
 * @param {{ render: (data: string[]) => JSX.Element }} props
 */
function DataLoader({ render }) {
  // Dans un vrai projet, ces données viendraient d'une API ou d'un état
  const data = ['Alice', 'Bob', 'Charlie'];

  // On appelle render() en lui passant les données — c'est le consommateur qui décide de l'affichage
  return <div className="data-loader">{render(data)}</div>;
}

export default DataLoader;
