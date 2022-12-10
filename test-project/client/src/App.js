import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './components/Message/Message';

function App() {
  return (
    <div>    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/message" element={<Message />} />

    </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
