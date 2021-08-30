import { render, screen } from '@testing-library/react';
import { IAuthState } from './types';
import { AuthContext } from './contexts/AuthState';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

const initialState : IAuthState = {
  user:{name:'test-user', token:'202f0923f0j33çdfmksdjf29302330'},
  login: () => Promise.resolve(),
  logout:() => Promise.resolve(),
  isLoggingIn: false,  
  isLoggedIn:false,
  dispatch: () => {},
  loginError:undefined,
}

test("Username should show on navbar", ()=>{

    render(
      <BrowserRouter>
        <AuthContext.Provider value={initialState}>
          <NavBar/>
        </AuthContext.Provider>
      </BrowserRouter>
    )
    expect (screen.getByText('test-user')).toBeInTheDocument();
})