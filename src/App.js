import "./index.css";
import Input from "./Input";

export default function App() {
  return (
    <div className="App">
      <Input type="text" name="name" lable="name"/><br></br>
      <Input type="email" name="email" lable="email" /><br></br>
      <Input type="number" name="contact" lable="contact" /><br></br>
      <button>submit</button>
    </div>
  );
}