import React from 'react';
import './App.css';
import { APIContextProvider } from './Components/Context';
import MainContactsPage from './Components/mainContactsPage';
import SignIn from './Components/SignIn';


function App() {

  return <div className="App">
   <MainContactsPage/>
  </div>
}

export default App;
