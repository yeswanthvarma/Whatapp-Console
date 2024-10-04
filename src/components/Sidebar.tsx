/*------------------------ SideBar with LOGO and PATHS ----------------------------*/
import React from 'react';
import { Menu } from 'primereact/menu';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import '../styles/Sidebar.scss'; 
import  Logo from '../assets/images/Logo.png'; 

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  /*------------------------ List of Paths in Sidebar ----------------------------*/
  const items = [
    { label: 'Templates', icon: 'pi pi-home', command: () => navigate('/') },
    { label: 'Dasboard', icon: 'pi pi-address-book', command: () => navigate('/dasboard') },
    { label: 'Contacts', icon: 'pi pi-address-book', command: () => navigate('/contacts') },
    { label: 'Send Massage', icon: 'pi pi-comments', command: () => navigate('/SendMassage') }
  ];

  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
     { /*------------------------ Menu for Sidebar ----------------------------*/}
      <Menu model={items} className="p-menu" />
    </div>
  );
};

export default Sidebar;
