import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Marks from './Marks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Abhishek"} email={'vandana2003gupta@gmail.com'} mob={9520866276}/>
    <Marks m1={87} m2={85} m3={84}/>
    <App name={"Utkarsh Sharma"} email={'utk@gmail.com'} mob={9520866277}/>
    <Marks m1={83} m2={65} m3={74}/>
    <DisplayMarks></DisplayMarks>
   </StrictMode>
);
