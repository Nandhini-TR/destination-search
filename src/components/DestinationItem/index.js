import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  constructor(props) {
    super(props)
    const {destinationList} = props
    this.state = {name: destinationList.name, imgUrl: destinationList.imgUrl}
  }

  render() {
    const {name, imgUrl} = this.state
    return (
      <li>
        <img src={imgUrl} alt={name} className="image" />
        <p className="heading">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
