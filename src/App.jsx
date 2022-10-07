import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Base from './component/layout/Base';
import Home from './pages/Home';
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";


function App() {
  return (
   
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route path='/' index element ={ <Home/>} />
   </Routes>
   
   </Base>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
