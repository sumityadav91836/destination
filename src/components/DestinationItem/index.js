import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    return (
      <li className="list-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png"
          className="destination-image"
          alt="name"
        />
        <p className="destination-name">Melaka Mosque</p>
      </li>
    )
  }
}

export default DestinationItem
