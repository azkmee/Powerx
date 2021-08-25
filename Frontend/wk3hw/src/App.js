import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/loginPage';
import { Marketplace } from './pages/marketplace';

function App() {
  return (
    <div className="App bg-white">
      {/* <header className="App-header">
        
      </header> */}
      {/* <LoginPage id='field'>
          
        </LoginPage> */}

      <Marketplace/>
    </div>
  );
}

export default App;
