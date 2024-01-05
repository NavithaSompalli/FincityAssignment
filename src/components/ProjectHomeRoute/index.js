import {Link} from 'react-router-dom'

import HeaderRoute from '../HeaderRoute'

import './index.css'

const ProjectHomeRoute = () => (
  <>
    <HeaderRoute />
    <div className="home-container">
      <div className="designer-container">
        <h1 className="heading">UI/UX Designer</h1>
        <h1 className="main-heading">Hello, my name is Madelyn Torff</h1>
        <p className="description">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <button type="button" className="pro-button">
          <Link to="/projects">Projects</Link>
        </button>
        <button type="button" className="linked-button">
          LinkedIn
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1704379967/imageHEllo_bs6rf1.png"
        alt="imageHello"
      />
    </div>
  </>
)

export default ProjectHomeRoute
