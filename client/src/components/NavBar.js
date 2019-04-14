import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './styles/NavBar.css';


export default class NavBar extends Component {

  render() {

    return (
        <div className="menu__wrapper">
            <div className="menu">
                <Link to="/" className="menu__item brand">
                    Droom
                </Link>

                <div>

                    <Link to="/login" className="menu__item">
                        Login
                    </Link>


                    <Link to="/signup" className="menu__item">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
  }
}
