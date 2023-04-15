import React from "react";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                
                <a 
                    className={currentPage === "home" ? "nav-link active" : "nav-link disabled" } 
                    aria-current="page" 
                    href="#home"
                >
                        Home
                </a>
                
                <a 
                    className={currentPage === "about" ? "nav-link active" : "nav-link disabled" } 
                    href="#about"
                >
                    About Me
                </a>
                
                <a 
                    className={currentPage === "portfolio" ? "nav-link active" : "nav-link disabled" } 
                    href="#portfolio"
                >
                    Portfolio
                </a>

                <a 
                    className={currentPage === "resume" ? "nav-link active" : "nav-link disabled" } 
                    href="#resume"
                >   
                    Resume  
                </a>

            </div>
            </div>
        </div>
        </nav>
    )
}