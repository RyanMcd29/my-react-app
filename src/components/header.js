import React from "react";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                
                <a 
                    className={currentPage === "Home" ? "nav-link active" : "nav-link" } 
                    aria-current="page" 
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                >
                    Home
                </a>
                
                <a 
                    className={currentPage === "About" ? "nav-link active" : "nav-link" } 
                    href="#about"
                    aria-current="page" 

                    onClick={() => handlePageChange('About')}
                >
                    About Me
                </a>
                
                <a 
                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link" } 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>

                <a 
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link" } 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                >   
                    Resume  
                </a>

            </div>
            </div>
        </div>
        </nav>
    )
}