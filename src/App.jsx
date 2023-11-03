import { useState } from 'react'
import moon from './assets/moon.svg';
import sun from "./assets/sun.png";
import './App.css'
import Head from './components/head-component/Head'
import Portfolio from './components/main-component/Portfolio'
import Footer from './components/footer-component/footer'
import Main from './components/main-component/Main';

function App() {
  const [state, setState] = useState(moon);
  const [darkTheme, setDarkTheme] = useState("rgb(0, 0, 255)");

  const handleThemeIcon = function () {
    if (state === sun) { 
      setState(moon);
      setDarkTheme("rgb(0, 0, 255)");
    }
    if (state === moon) {
      setState(sun);
      setDarkTheme("rgb(0, 0, 60)");
      // setDarkTheme('rgb(2, 2, 80)');
    }
  };
  return (
    <>
      <Head handleThemeIcon={handleThemeIcon} darkTheme={darkTheme} state={state} />
      <Main darkTheme={darkTheme}  />
      <Footer />
    </>
  )
}

export default App
