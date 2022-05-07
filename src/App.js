import './App.css';
import Tabs from './components/Tabs';


function App() {
  return (
    <div className="App">
      <Tabs tabLabels={[
        {tab: "Tab 1", content: "Tab 1 content is showing here"},
        {tab: "Tab 2", content: "Tab 2 content is showing here"},
        {tab: "Tab 3", content: "Tab 3 content is showing here"},
    ]}/>
    </div>
  );
}

export default App;