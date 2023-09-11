
import 'react-multi-carousel/lib/styles.css';
import Project from './components/Project';
import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from './components/Contact';
import Footer from './components/Footer';

const App =()=>{
return(
  <>
  < Hero />
  <Header />
<Skills />
<Project />
<Contact />
<Footer />
  </>
)
   }   
export default App;

