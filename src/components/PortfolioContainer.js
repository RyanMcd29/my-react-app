import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact.js'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'


export default function PortfolioContainer() {
        // set current page state
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        // eslint-disable-next-line default-case
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume': 
                return <Resume />;
        }
    }
    const handlePageChange = (page) => setCurrentPage(page)


    return (
        <body>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </body>

    )
}