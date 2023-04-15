import React, { useState } from 'react'
import Header from './Header'

export default function PortfolioContainer() {
        // set current page state
    const [currentPage, setCurrentPage] = useState('Home')

    const handlePageChange = (page) => setCurrentPage(page)


    return (
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    )
}