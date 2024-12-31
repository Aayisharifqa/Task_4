import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import './index.css'
//import Navbar from './Navbar.jsx'
//import App from './App.jsx'
//import Form from './Form.jsx';
//import Slam from './Slam.jsx';
//import List from './Cat.jsx';
import Abc from './Abc.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/> */}
    {/* <Form /> */}
    {/* <Slam /> */}
    {/* <App/> */}
    <Abc/>
  

  </StrictMode>,
)
