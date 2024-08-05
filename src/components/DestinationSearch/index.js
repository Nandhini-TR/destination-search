import {useState} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const [searchInput, setSearchInput] = useState('')

  const {destinationsList} = props

  return (
    <div>
      <h1 className="heading">Destination Search</h1>
      <div className="search-container">
        <input
          type="search"
          onChange={event => setSearchInput(event.target.value)}
          className="search-input"
        />
        <img
          alt="search icon"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          className="image"
        />
      </div>
      <ul className="container">
        {destinationsList
          .filter(a => a.name.toLowerCase().includes(searchInput))
          .map(eachItem => (
            <DestinationItem key={eachItem.id} destinationList={eachItem} />
          ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
