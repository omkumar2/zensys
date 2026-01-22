import "./App.scss";

import Navbar from "./components/navbar/navbar";
// import Editor from "./workspace/editor/editor";
import { TAB_COMPONENTS } from "@/types/tab";
import { useTabStore } from "./store/useTabStore";
function App() {
  const {activeTabId,tabs} = useTabStore();
let activeTab =  tabs.find(tab => tab.id === activeTabId);
const ActiveTabComponent = activeTab ? TAB_COMPONENTS[activeTab.type] : null;
  return (
    <main className="container">
      <Navbar></Navbar>
      {ActiveTabComponent && <ActiveTabComponent />}
    </main>
  );
}

export default App;
