
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Dashboard from './Components/Dashboard';
import AddTopics from './Components/AddTopics';
import CreateStudent from './Components/CreateStudent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/deshboard/:name' element={<Dashboard />} />
          <Route path='/addTopic' element={<AddTopics />} />
          <Route path='/CreateStudent' element={<CreateStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
