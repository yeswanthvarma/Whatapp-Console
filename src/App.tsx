import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Sidebar.scss';
import './styles/App.scss';
import Contacts from './pages/Contacts';
import MessageTemplates from './pages/MassageTemplate';
import Dasboard from './pages/Dasboard';
import SendMessages from './pages/SendMassages';
const App: React.FC = () => {
  return (
    <Router>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12 col-md-2 ">
            <Sidebar />
          </div>
          <div className="col-12 col-md-10">
            <div className="main-content   p-4">
               <Routes>
                <Route path="/" element={<MessageTemplates/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/dasboard" element={<Dasboard/>} />
                <Route path="/SendMassage" element={<SendMessages/>}/>
              </Routes>
            </div>
          </div>  
        </div>
      </div>
    </Router>
  );
};

export default App;
