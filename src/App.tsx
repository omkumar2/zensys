import "./App.scss";

import Navbar from "./components/navbar/navbar";
import Workspace from "./workspace/workspace";
function App() {
  return (
    <main className="container">
      <Navbar />
      <Workspace />
    </main>
  );
}

export default App;
