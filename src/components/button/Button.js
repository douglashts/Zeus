import "./button.css";

const Button = ({classBt, onClick}) => {
    return <button className={classBt} onClick={onClick}>Teste de Botão</button>;
  };
  
export default Button;