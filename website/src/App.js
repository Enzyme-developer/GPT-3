import React from 'react';
import { Brand , Navbar, Cta} from './components';
import { Blog, Features , Footer , Header , Possibility, Whatgpt3} from './containers';
import './App.css';

const App = () =>{
  return(
    <div className='App gradient__bg'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;