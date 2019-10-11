import React, { useState } from 'react';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import Breadcrumbs from './components/Breadcrumbs';
import Details from './components/Details';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { inputData } from './testData';

export const BreadcrumbsContext = React.createContext({})

function App() {
  const [ breadcrumbs, setBreadcrumbs ] = useState([
    {
      title: 'Home',
      menu: inputData.map(data => ({title: data.title}))
    }
  ])

  return (
    <div className="App">
      <BreadcrumbsContext.Provider
        value = {{
          breadcrumbs,
          updateBreadcrumbs: setBreadcrumbs
        }}
      >
        <BrowserRouter>
          <Breadcrumbs />
          <div>-----------------------------------------------------</div>
          <MainMenu />
          <div>-----------------------------------------------------</div>
          <Route path='/' component={Home}/>
          <Route path='/:id/:title' component={Details}/>
        </BrowserRouter>
      </BreadcrumbsContext.Provider>
    </div>
  );
}

export default App;
