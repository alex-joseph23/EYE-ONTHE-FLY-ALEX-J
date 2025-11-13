import "./Alert.css";
function Alert({ message, type }) {
  //alert component and props
  const className = type === "error" ? "alert error" : "alert success"; //uses a ternary operator to write an "if else" statement to display which ever different alert it is.
  return <p className={className}>{message}</p>; //display alert message
}
export default Alert;
