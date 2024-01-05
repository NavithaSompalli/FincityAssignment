import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {FaInstagramSquare, FaLinkedin, FaEnvelope} from 'react-icons/fa'

import './index.css'

const projectLists = [
  {
    uniqueNo: 1,
    projectName: 'Software Developer',
    projectLink:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    projectDes: 'Esther Howard',
  },
]

class AddRoute extends Component {
  state = {
    projectList: [...projectLists],
    projectName: '',
    projectLink: '',
    projectDes: '',
  }

  onChangeName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({projectDes: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {projectDes, projectLink, projectName, projectList} = this.state
    const object = {
      UniqueNo: uuidv4(),
      projectName,
      projectLink,
      projectDes,
    }

    this.setState({projectList: [...projectList, object]})
    this.setState({projectDes: ''})
    this.setState({projectName: ''})
    this.setState({projectLink: ''})
  }

  render() {
    const {projectName, projectLink, projectDes, projectList} = this.state
    console.log(projectList)
    return (
      <div className="add-bg-container">
        <div>
          <h1 className="add-heading">Add Projects</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label htmlFor="text-element">Project Name</label>
            <input
              type="text"
              id="text-element"
              className="input-element"
              onChange={this.onChangeName}
              value={projectName}
            />

            <label htmlFor="link-element">Project Link</label>
            <input
              type="text"
              id="link-element"
              className="input-element"
              onChange={this.onChangeLink}
              value={projectLink}
            />

            <label htmlFor="des-element">Description</label>
            <input
              type="text"
              id="des-element"
              className="input-element"
              onChange={this.onChangeDescription}
              value={projectDes}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <h1>Projects</h1>
        <ul className="ul-container">
          {projectList.map(obj => (
            <li className="li-container">
              <div>
                <h1>{obj.projectName}</h1>
                <p>{obj.projectDes}</p>
                <button type="button" className="view-projects-container">
                  View projects
                </button>
              </div>
              <img
                src={obj.projectLink}
                alt={obj.projectName}
                className="image-element"
              />
            </li>
          ))}
        </ul>
        <div>
          <div className="icons-container">
            <FaInstagramSquare className="icon" />
            <FaLinkedin className="icon" />
            <FaEnvelope className="icon" />
          </div>
          <p>Copyright © 2024. All rights reserved</p>
        </div>
      </div>
    )
  }
}

export default AddRoute
