
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Notes from './components/Notes';
import NoteState from './context/notes/noteState';
import UserState from './context/user/userState';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <NoteState>
        <UserState>

          <Router>
          <Header />
            <Routes>
            <Route exact path='/signup' element={<Signup />} />
             <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/notes' element={<Notes />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/logout' element={<Logout />} />
              



            </Routes>

          </Router>
        </UserState>
      </NoteState>
    </div>
  );
}

export default App;
