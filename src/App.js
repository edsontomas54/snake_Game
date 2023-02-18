import { createRoot } from 'react-dom/client';


import Board from "./Board/Board";

import './App.css';


function App() {

  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
}

export default App

