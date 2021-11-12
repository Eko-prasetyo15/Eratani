import React from "react"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                    <div className="container-fluid mt-1 mb-1">
                        <Link className="navbar-brand " to="/">
                            <div className="logo-brand">
                                <img src="https://www.eratani.co.id/assets/img/logo.png" alt="logo eratani" style={{ display: 'inline-block', width:'100px'}} />
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={{ color: '#4d4d4d' }}>Soal(1)</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shorting" style={{ color: '#4d4d4d' }}>Soal(2&3)</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/table" style={{ color: '#4d4d4d' }}>Soal(4)</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/list" style={{ color: '#4d4d4d' }}>Soal(5)</Link>
                                </li>
                            </ul>
                            <div className="auth-link" style={{ marginLeft: 'auto' }}>
                                <a href="https://cms.eratani.co.id/register" className="btn btn-warning btn-new" style={{ color: 'black', textAlign:'center' }}>Mitra Petani</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header