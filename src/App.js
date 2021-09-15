import logo from './logo.svg';
import './App.css';
import Navbar from './compoment/Navbar';
import Img from './compoment/Img';
import Stack from './compoment/Stack';
import Footer from './compoment/Footer';
import Projects from './compoment/Project';
import Reccomadtion from './compoment/Reccomendtion';
import Contact from './compoment/Contact';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
   
  <Switch>
     <Route exact path="/">
     <Navbar/>

    <Img/>
    <Reccomadtion/>
    <Stack/>
    <Projects/>
   

    </Route>
 </Switch>

 <Route exact path="/contact">
    <Contact/>
      </Route>

      
    
    

   

   </BrowserRouter>
  );
}

export default App;
