import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { APIContextProvider } from './Components/Context';
import MainContactsPage from './Components/mainContactsPage';
import UseSession from './Components/SessionUtils';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { UserSessionContextProvider } from './Components/Context';


function App() {

  return <div className="App">
    {/* <APIContextProvider> */}
    <BrowserRouter>
      <UserSessionContextProvider>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/contact' element={<MainContactsPage/>}
        />
      </Routes>
      </UserSessionContextProvider>
    </BrowserRouter>
    {/* </APIContextProvider> */}
  </div>
}

export default App;
