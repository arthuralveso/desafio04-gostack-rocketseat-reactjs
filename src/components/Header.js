import React, { Component } from 'react';
import logo from '../assets/logo/logo.png'



export default class Header extends Component {
  render() {
    return (
    <header>
      <nav>
        <div className="header">
          <div className="logo">
            <img className="logo" src={logo}/>
          </div>
          <div className="profile-name">
            <div>
              <h3>Meu Perfil</h3>
            </div>
          </div>
        </div>

      </nav>
    </header>
    );
  }
}
