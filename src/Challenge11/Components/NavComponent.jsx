import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';
export const NavComponent = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink activeClassName='active-link" to=/' exact>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='active-link' to='/acerca'>
            Acerca de
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='active-link' to='/ingresar'>
            Iniciar Sesión
          </NavLink>
        </li>
      </ul>
    </nav>  )
}
