import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import CreateEditPerson from './pages/CreateEditPerson'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/criar" element={<CreateEditPerson/>}/>
      <Route path="/editar/:id" element={<CreateEditPerson/>}/>
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>
)
