import './App.css';
import UploadFiles from './component/upload-results/UploadFiles';
import GetResult from './component/result-view/GetResult';
import { Routes, Route } from 'react-router-dom';
import Auth from './component/auth/Auth';
import 'bootstrap/dist/css/bootstrap.css';
import About from './component/navbar/About';
import Contact from './component/navbar/Contact';
import FinalNavBar from './component/navbar/FinalNavBar';






function App() {


  return (
    <div className="body">

      <FinalNavBar />
      
      
      <Routes>
        <Route path='/' index element={<GetResult />} />
        <Route path='/user/auth' element={<Auth />} />
        <Route path='/upload' element={<UploadFiles />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
