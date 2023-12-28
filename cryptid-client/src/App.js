import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateCryptid from './components/CreateCryptid';
import ShowCryptidList from './components/ShowCryptidList';
import ShowCryptidDetails from './components/ShowCryptidDetails';
import UpdateCryptidInfo from './components/UpdateCryptidInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowCryptidList />} />
          <Route path='/create-cryptid' element={<CreateCryptid />} />
          <Route path='/edit-cryptid/:id' element={<UpdateCryptidInfo />} />
          <Route path='/show-cryptid/:id' element={<ShowCryptidDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
