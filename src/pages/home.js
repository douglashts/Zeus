import Button from "../components/button/Button";
import Input from "../components/input/Input";

const Home = () => {
    return( 
    <>
     <h1>Home</h1> 
     <Button classBt="bt" onClick={() => alert('Teste')}/>
     <Button classBt="bt2" onClick={() => alert('Teste')}/>
     <Input type="text"/>
     <Input type="password"/>
     <Input type="number"/>
    </>
    );
  };
  
export default Home;