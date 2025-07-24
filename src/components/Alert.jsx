import "./Alert.css";
function Alert({ message, type }) {
  const className = type === "error" ? "alert error" : "alert success";
  return <p className={className}>{message}</p>;
}
export default Alert;
