import React from 'react';

import { Sidebar, MenuItem, Menu } from 'react-pro-sidebar';
import { CheckSquareFill, List, TabletFill, Bell } from 'react-bootstrap-icons';
import { Container, Navbar } from 'react-bootstrap';

import './index.css';
import Banner from './components/Banner';

import logo from './Assets/logo.svg';
import img from './Assets/img.jpg';




function App() {

  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(window.matchMedia('(max-width: 800px)').matches);

  return (
    <div className="container" style={{ display: 'flex', height: '100%', minHeight: '100vh', }}>
      <Sidebar
        backgroundColor="#0C155B"
        width="12rem"

        className="sidebar"
        onBackdropClick={() => setToggled(false)}
        breakPoint="always"
        toggled={toggled}
        customBreakPoint="800px"
        onBreakPoint={setBroken}>


        <center style={{ paddingTop: 0.5 + 'rem', }}>
          <Navbar.Brand className='logo' >
            <img
              alt=""
              src={logo}

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

          <MenuItem active icon={< TabletFill />} > Market</MenuItem>
          <MenuItem icon={< TabletFill />} > Active Bid</MenuItem>
          <MenuItem icon={< CheckSquareFill />} > Saved</MenuItem>

          <h5 className="sidebarheader">Account</h5>

          <MenuItem icon={< TabletFill />} > Collection</MenuItem>
          <MenuItem icon={< TabletFill />} > Wallet</MenuItem>
          <MenuItem icon={< CheckSquareFill />} > History</MenuItem>

        </Menu>


        <div className="Newsletter">
          <>Enter your mail to get product update</>
          <input className="disable-focus sidebarinput" type="text" placeholder="Enter your mail here" />
          

        </div>


      </Sidebar>

      <Container fluid style={{ padding: 1 + '%',paddingTop:0.5 +'rem' }} >

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', }}>
            {broken && (
              < List color='white' style={{marginTop:0.2+'rem'}}  size={26} onClick={() => setToggled(!toggled)} />
            )}
            <input className="disable-focus" type="text" placeholder="Search Item" />

          </div>
          <div style={{ display: 'flex',padding:0.5 }}>
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={img}
                alt="Profile"
              />
            </div>
            <div className="notification-container">
              <center>
              <Bell style={{color:'white',marginTop:0.5+'rem'}} size={21} />
              </center>
            </div>
          </div>
        </div>




        <Banner />


      </Container>

    </div>
  );

}

export default App;
