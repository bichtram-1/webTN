import './App.css';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
const  App=()=> {
  return (
    <div className="App">
     <Header/>
     <div>
      test
      <div>
       <button>
        <Link to="/users">page</Link>
      </button>
       <button> 
        <Link to="/admins">admin</Link>
        
       </button>

      </div>

     </div>
    </div>
  );
}

export default App;
