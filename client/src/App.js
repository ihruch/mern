import React from 'react';
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css';
import {AuthContext} from "./context/auth.context";
import {NavBar} from "./components/NavBar";
import {Loader} from './components/Loader';

function App(){

  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if(!ready) {
      return <Loader />
  }

  return (
      <AuthContext.Provider value={{login, logout, token, userId, isAuthenticated}}>
        { isAuthenticated && <NavBar />}
        <div className="container">
            {routes}
        </div>
      </AuthContext.Provider>
  );
}

export default App;
