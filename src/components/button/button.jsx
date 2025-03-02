import "./button.css";

const Button = ({ label }) => {
  return (
    <button
      onClick={() => alert("A label desse botão é<insira a label aqui via JS>")}
    >
      {label}
    </button>
  );
};

export default Button;
