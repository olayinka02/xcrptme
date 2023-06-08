import React from 'react';

import { Sidebar, MenuItem, Menu } from 'react-pro-sidebar';
import {  List, Bell, BagCheckFill,  CalendarCheckFill,  CollectionFill, WalletFill, ClockFill, Save2Fill } from 'react-bootstrap-icons';
import {  Navbar, Row, Col, Container } from 'react-bootstrap';


import './index.css';
import Banner from './components/Banner';

import logo from './Assets/logo.svg';
import img from './Assets/img.jpg';




function App() {

  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(window.matchMedia('(max-width: 800px)').matches);

  return (
    <Container fluid style={{ display:'flex', height: '100%', minHeight: '100vh', padding: 0, overflow: 'hidden',width:'100%', }}>
    
          <Sidebar
            backgroundColor="#0C155B"
            width="12rem"

            className="sidebar"
            onBackdropClick={() => setToggled(false)}
            breakPoint="always"
            toggled={toggled}
            customBreakPoint="800px"
            onBreakPoint={setBroken}>


            <center >
              <Navbar.Brand className='logo' >
                <img
                  alt=""
                  src={logo}
                  style={{marginTop:'1.1rem'}}
                  className="d-inline-block align-top"
                />{' '}

              </Navbar.Brand>
            </center>



            <Menu

              className='menu'

              menuItemStyles={{
                button: ({ active }) => {
                  // only apply styles on first level elements of the tree

                  if (active === true)
                    return {

                      background: 'linear-gradient(263.15deg, #2A3266 17.86%, #452A75 40.14%, #622285 64.48%)',
                      color: 'aliceblue',
                      borderRadius: '0.4rem',
                    };
                  else {
                    return {
                      color: 'aliceblue',
                    }
                  }
                },
              }}

            >
              <h5 className="sidebarheader">Market Place</h5>

              <MenuItem active icon={< BagCheckFill size={20} />} > Market</MenuItem>
              <MenuItem icon={< CalendarCheckFill size={19} />} > Active Bid</MenuItem>
              <MenuItem icon={< Save2Fill  size={19} />} > Saved</MenuItem>

              <h5 className="sidebarheader2">Account</h5>

              <MenuItem icon={< CollectionFill size={19} />} > Collection</MenuItem>
              <MenuItem icon={< WalletFill size={19}/>} > Wallet</MenuItem>
              <MenuItem icon={< ClockFill size={19}/>} > History</MenuItem>

            </Menu>


            <div className="Newsletter">
              <>Enter your mail to get product update</>
              <input className="disable-focus sidebarinput" type="text" placeholder="Enter your mail here" />


            </div>


          </Sidebar>
       

       
          <Container fluid className="bodycontainer">
          
            <Row>
              <Col sm={6} md={6} lg={6}>
                <div>
                  {broken && (
                    < List color='white' style={{ marginTop: 0.2 + 'rem' }} size={26} onClick={() => setToggled(!toggled)} />
                  )}
                    <input className="disable-focus" type="text" placeholder="Search Item" />
                </div>
              </Col>
              <Col  sm={6} md={6} lg={6}>
              <div style={{ display: 'flex', padding: 0.5 }}>
                <div className="profile-image-container">
                  <img
                    className="profile-image"
                    src={img}
                    alt="Profile"
                  />
                </div>
                <div className="notification-container">
                  <center>
                    <Bell style={{ color: 'white', marginTop: 0.5 + 'rem' }} size={21} />
                  </center>
                </div>
              </div>
              </Col>
              
            </Row>
            <Row>  <Banner /></Row>

          




          


          </Container>
       




    </Container>
  );

}

export default App;
