import { useEffect } from 'react';
import './App.css';

let api = `http://www.omdbapi.com?apikey=41d901b9`

function App() {
  async function search(title) {
    const res = await fetch(`${api}&s=${title}`)
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    search('batman')
  }, [])
  return (
    
  )
}

export default App;
