import './App.css';
import { useContext } from 'react';
import { AuthContext } from './service/auth.service';
import { keywords } from './reducers/keywords';
import { RegisterPage } from './pages/registerPage';
import { LoginPage } from './pages/loginPage';
import { Button } from './components/button';
import { Route, useHistory } from 'react-router-dom'
import { MoviePage } from './pages/moviePage';


function App() {
  const auth = useContext(AuthContext)

  const  history = useHistory()
  
  // if (auth.type == keywords.AUTHENTICATED) {
  //   history.push('/movie')
  // } else {
  //   history.push('/login')
  // }

  return (
    <div className="App bg-white">
      <div className=''>

      </div>
    {/* {auth.type === keywords.NOT_AUTHENTICATED_NOT_REGISTERED ?  
      <Button 
        onClick ={()=> {
          history.push('/login')
          }}> 
        Login 
      </Button> :
      auth.type === keywords.NOT_AUTHENTICATED_REGISTERED ? 
      <Button 
        onClick ={()=> {
          history.push('/register')
          }}> 
        Register 
      </Button> :
      <Button 
        onClick ={()=> {
          history.push('/login')
          }}> 
        Logout 
      </Button> 
    } */}


    
      

    <Route path='/login'>
      <LoginPage />
    </Route>
    <Route path='/register'>
      <RegisterPage/>
    </Route>
    <Route path='/movies'>
      <MoviePage />
    </Route>


    {/* {auth.type === keywords.NOT_AUTHENTICATED_NOT_REGISTERED ?  
      <RegisterPage/> :
      auth.type === keywords.NOT_AUTHENTICATED_REGISTERED ?
      <LoginPage /> :
      'Hello'
    } */}
    

  </div>
    
  );
}

export default App;
