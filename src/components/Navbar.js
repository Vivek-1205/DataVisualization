import React, { useState } from 'react'
import { UseAuth } from '../Auth';

const Navbar = (prop) => {
    const auth = UseAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Data Visualization</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active " aria-current="page" onClick={()=>prop.setPageVal(0)}>DashBoard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={()=>prop.setPageVal(1)}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={()=>prop.setPageVal(2)}>Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={()=>prop.setPageVal(3)}>About</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" id='search_val' aria-label="Search"/>
                        <button className="btn btn-outline-primary me-2" onClick={(e)=>{e.preventDefault();let val = document.getElementById('search_val');prop.setSearch(val.value); prop.setPageVal(3);val.value = ""}} type="submit">Search</button>
                        <button className="btn btn-outline-danger" onClick={()=>{auth.logout();}}  type="button">SignOut</button>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
