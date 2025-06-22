
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
            </NavLink>
        {' | '}
            <NavLink to='/watchlist' className={({ isActive }) => isActive ? 'active' : ''}>
                WatchList
            </NavLink>
        </nav>
    )
}

export default Header
