import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={props.mode}>
        <div className="container-fluid">
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <a className="navbar-brand" href="" style={props.mode}>{props.tittle}</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home" style={props.mode} className="nav-link"><b>SHOW</b></Link>

              </li>
              <li className="nav-item">
                <Link to="/link" style={props.mode} className="nav-link"> <b>HIDE</b> </Link>
              </li><p></p>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={props.mode}>
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="">Count Character</a></li>
                  <li><a className="dropdown-item" href="">Count Words</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="">Contact</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style={props.mode}>Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" style={props.mode}>Search</button>


              {/* dark mod  */}
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.text}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
