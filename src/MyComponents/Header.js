


import React from 'react'
import propTypes from 'prop-types';
export default function Header(props) {
   
    return (
    
        <nav   className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#1a0033"}}>
  <div   className="container-fluid">
    <a   className="navbar-brand " style={{color:"#ffffff"}} >{props.title }</a>
    <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span   className="navbar-toggler-icon"></span>
    </button>
    <div   className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul   className="navbar-nav me-auto mb-2 mb-lg-0">
        <li   className="nav-item">
          <a   className="nav-link active" style={{color:"#ffffff"}}  aria-current="page">Home</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" style={{color:"#ffffff"}} >About</a>
        </li>
       
      </ul>
     {props.searchBar? <form   className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button   className="btn btn-outline-light" type="submit">Search</button>
      </form>:"Hello Bro"}
    </div>
  </div>
</nav>
        
    )
}

Header.propTypes ={
    title:propTypes.string
}