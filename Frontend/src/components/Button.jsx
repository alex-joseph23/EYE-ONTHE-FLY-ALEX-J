function Button({ label, onClick, type = "button" }) {
  // button component with
  //  3 props, onClick being the function to run when clicked, the other 2 being label and type
  return (
    <button type={type} className="submit-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
