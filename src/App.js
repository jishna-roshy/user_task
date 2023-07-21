
import './App.css';
import './bootstrap.min.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
          <Route path='/' element={ <Signup/>}/>

          <Route path='/login' element={ <Login/>}/>


             <Route path='/home' element={ <Home/>}/>
             <Route path='/add' element={ <Add />}/>
             <Route path='/edit' element={ <Edit/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
