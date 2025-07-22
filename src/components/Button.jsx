function Button({ label, onClick, type = "button" }) {
  return (
    <button type={type} className="submit-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;