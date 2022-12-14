import { Blog, Features, Footer, Header, Possibility, WhatGP3 } from './containers'
import { Article, Brand, Cta, Feature, Navbar } from './components'
import './App.css'

let App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <WhatGP3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}
export default App;
