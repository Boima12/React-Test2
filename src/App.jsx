import './App.css';

import { Link } from 'react-router-dom';


function App() {

  return (
    <>
      <p>This is App</p>

      <Link to="/pages/page1">
        <button>go to page 1</button>
      </Link>

      <br></br>

      <Link to="/pages/page2">
        <button>go to page 2</button>
      </Link>
    </>
  )
}

export default App
