/**
 * Composant Button simple.
 * Reçoit `label` (texte) et `onClick` (action) via les props.
 */
function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
