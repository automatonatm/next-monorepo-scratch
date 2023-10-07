import "./App.css";
import "ui/styles.css";
import { Button } from "ui";

function App() {
  return (
    <div className="bg-green-100 flex justify-center">
      <h1 className="text-lg text-blue-600">Vite + React</h1>
      <Button />
      <div className="card"></div>
    </div>
  );
}

export default App;
