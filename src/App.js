import React, { useState } from 'react';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import Breadcrumbs from './components/Breadcrumbs';
import Details from './components/Details';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

export const BreadcrumbsContext = React.createContext({})

function App() {
  const [ breadcrumbs, setBreadcrumbs ] = useState(['Home'])

  return (
    <div className="App container-fluid">
      <BreadcrumbsContext.Provider
        value = {{
          breadcrumbs,
          updateBreadcrumbs: setBreadcrumbs
        }}
      >
        <BrowserRouter>
          <div className='row breadcrumbs'>
            <div className='col-md-12'>
              <Breadcrumbs />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2 mainmenu'>
              <MainMenu />
            </div>
            <div className='col-md-10 details'>
              <Route exact path='/' component={Home}/>
              <Route path='/:title' component={Details}/>
            </div>
          </div>
        </BrowserRouter>
      </BreadcrumbsContext.Provider>
    </div>
  );
}

export default App;
