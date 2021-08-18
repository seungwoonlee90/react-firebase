import React, { useState } from 'react';
import AppRouter from './Router';

function App() {
  const [isLoggedIn] = useState(true);
  return <AppRouter isLoggedIn={isLoggedIn} />
}

export default App;
