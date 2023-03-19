import './App.css';
import Header from './Header';
import { LangProvider } from './langContext';
import Content from './Content';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </LangProvider>
  );
}

export default App;
