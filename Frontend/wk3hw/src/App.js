import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/loginPage';
import { Marketplace } from './pages/marketplace';
import { useContext } from 'react';
import { AuthContext } from './service/auth.service';

const AUTHENTICATED = 'authenticated'
const NOT_AUTHENTICATED = 'not-authenticated'

function App() {

  const auth = useContext(AuthContext)

  return (
    <div className="App bg-white">
      
      {auth.type === AUTHENTICATED ?  
        <Marketplace/> : 
        <LoginPage/>
      }
      

      {/* <Marketplace/> */}
    </div>
  );
}

export default App;
