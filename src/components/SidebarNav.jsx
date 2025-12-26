import { useState } from 'react'
import './SidebarNav.css'
import { NavLink } from 'react-router';

const SidebarNav = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <nav className={navToggle ? 'sidebar' : 'sidebar close'}>
      <header>
        <div className='image-text'>
          {/* <img src='' alt=''/> */}
          <h1>RR</h1>
          <div className='text header-text'>
            <h2>Dashboard</h2>
          </div>
        </div>
        {navToggle ? (<i className='bx  bx-arrow-to-left toggle' onClick={() => setNavToggle(!navToggle)}></i>) :
          (<i class='bx  bx-arrow-to-right toggle' onClick={() => setNavToggle(!navToggle)}></i>)
        }
      </header>
      <div className='menu-bar'>
        <div className='menu'>
          <ul className='menu-links'>
            <li className='nav-link'>
              <NavLink to="/">
                <i className='bx  bx-tent icon'></i>
                <span id='icon-label' className='text nav-text'>

                  Dashboard
                </span>
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to="/Triage">
                <i className='bx  bx-pulse icon'></i>
                <span id='icon-label' className='text nav-text'>

                  Triage
                </span>
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to="/Transport">
                <i className='bx  bx-ambulance icon'></i>
                <span id='icon-label' className='text nav-text'>

                  Transport
                </span>
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to="/Treatment">
                <i className='bx  bx-pill-bottle-alt icon'></i>
                <span id='icon-label' className='text nav-text'>

                  Treatment
                </span>
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to="/History">
                <i className='bx  bx-clipboard-detail icon'></i>
                <span id='icon-label' className='text nav-text'>

                  History
                </span>
              </NavLink>
            </li>
          </ul>
          <ul className='menu-links'>
            <li className='nav-link'>
              <NavLink to="/Settings">
                <i className='bx  bx-cog icon'></i>
                <span id='icon-label' className='text nav-text'>

                  Settings
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='logout'>
          <ul className='menu-links'>

            <li className='nav-link'>
              <NavLink onClick={() => alert("User Logged Out!")}>
                <span id='icon-label' className='text nav-text'>

                  Logout
                </span>
                <i class='bx  bx-arrow-out-left-square-half icon'></i>
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default SidebarNav
