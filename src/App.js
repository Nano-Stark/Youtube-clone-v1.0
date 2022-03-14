import './App.css';
import Body from './components/Body';
import Header from './components/Header'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
          <Header />
          <div className="app_body">
          <div className="app_sidebar">
                <Sidebar />
            </div>
            <div className="app_body">
                <Body />
            </div>
          </div>
      
    </div>
  );
}

export default App;
