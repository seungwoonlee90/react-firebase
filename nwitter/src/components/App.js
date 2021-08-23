import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from '../firebase';

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn] = useState(authService.currentUser);
  return(
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App;
