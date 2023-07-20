import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* hello my name is shubham and i am learning crud operation */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
