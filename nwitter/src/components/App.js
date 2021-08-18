import React, { useState } from 'react';
import AppRouter from './Router';

function App() {
  const [isLoggedIn] = useState(true);
  return(
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App;
