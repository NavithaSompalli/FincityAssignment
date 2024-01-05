import {Link} from 'react-router-dom'

import './index.css'

const HeaderRoute = () => (
  <nav className="navbar-container">
    <h1 className="nav-link">Madelyn Torff</h1>
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default HeaderRoute
