import './App.css';
import { HomeCardCollection, NavBar, MarketingFooter  } from "./ui-components";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="collection-view">
      <HomeCardCollection 
        overrideItems={({ item, index }) => ({
          onClick: () => alert(` 詳細：${item.description} `)
        })}
      /> 
      </div>
      <MarketingFooter/>
    </div>
  );
}

export default App;
