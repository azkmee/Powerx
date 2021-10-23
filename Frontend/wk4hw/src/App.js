import './App.css';
import { useContext } from 'react';
import { AuthContext } from './service/auth.service';
import { keywords } from './reducers/keywords';
import { RegisterPage } from './pages/registerPage';
import { LoginPage } from './pages/loginPage';
import { Button } from './components/button';
import { Route, useHistory } from 'react-router-dom'
import { MoviePage } from './pages/moviePage';
import { MovieByIdPage } from './pages/movieByIdPage';
import { Router } from 'react-router-dom'
import { Switch } from 'react-router'


function App() {
  const auth = useContext(AuthContext)

  const  history = useHistory()
  


  return (
    <div className="App bg-white mt-5">
      <div className=''>

      </div>
    {auth.type === keywords.NOT_AUTHENTICATED ?  
    <div>
      <Button 
      onClick ={()=> {
        history.push('/register')
        }}> 
      Register 
      </Button>
      <Button 
        onClick ={()=> {
          history.push('/login')
          }}> 
        Login 
      </Button> 
      </div>
      :
      <Button 
        onClick ={()=> {
          auth.logout()
          }}> 
        Logout 
      </Button> 
    }    
      
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage/>
        </Route>
        <Route path='/movies/:id'>
          <MovieByIdPage />
        </Route>
        <Route path='/'>
          <MoviePage />
        </Route>
      </Switch>   

  </div>
    
  );
}

export default App;
