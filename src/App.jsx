import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import TechnicalSkills from './components/Skills'
import Interests from './components/Interest'
import Work from './components/Work'


import '/Users/myplayhouse/Documents/GitHub/personal_website/src/index.css'
import MyBook from './components/MyBook'
import Loader from './components/Loader'
import EnterPage from './components/EnterPage'

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showEnterPage, setShowEnterPage] = useState(true);
  const [showMainSite, setShowMainSite] = useState(false);


  const handleLoadingComplete = () =>{
    setIsLoading(false);
  };

  const handleEnter = () =>{
    setShowEnterPage(false);
    setTimeout(() =>{
      setShowMainSite(true);
    }, 500);
  };

  return (
    <>
    {/* loading screen */}
    {isLoading && <Loader onComplete={handleLoadingComplete}/>}
    
    {/* enter page */}
    {
      !isLoading && showEnterPage && (
        <div className='transition-opacity duration-500'
          style={{opacity: showEnterPage?1:0}}
        >
          <EnterPage onEnter={handleEnter}/>
        </div>
      )
    }

    {/* main site */}

    {showMainSite && (

    <div className='transition-opacity duration-700'
    style={{
      opacity: showMainSite?1:0
    }}>

      <Navigation/>
      {/* <Hero/> */}
      <About/>
      {/* <Work/> */}
      <Education/>
      <TechnicalSkills/>
      <MyBook/>
      <Interests/>
      <Contact/>
      </div>
      )}
    </>
  )
}

export default App
