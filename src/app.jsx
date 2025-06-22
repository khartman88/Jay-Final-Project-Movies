
import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import WatchListPage from './pages/WatchListPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './shared/Header'

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/watchlist" element={<WatchListPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
