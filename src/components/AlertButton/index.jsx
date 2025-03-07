import "../AlertButton";

const Button = ({ label }) => (
  <button onClick={() => alert(`A label desse botão é ${label}`)}>
    {label}
  </button>
);

export default Button;
