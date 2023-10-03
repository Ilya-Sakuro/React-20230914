export const Button = ({ title, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
